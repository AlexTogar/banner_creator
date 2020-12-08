import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';
import Banner from './Banner';
import BannerForm from './BannerForm';
import Helper from '../helper';
import defaultFormParams from '../defaultFormParams.json';
/*
Each field should be valid
defaultFormParams === {
  "imageURL": string,
  "text": string,
  "color1": string,
  "color2": string,
  "link": string
}*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validFormParams: Helper.copyObj(defaultFormParams),
      formParams: Helper.copyObj(defaultFormParams),
      paramsWithError: {
        imageURL: !Helper.isValid('imageURL', defaultFormParams.imageURL),
        text: !Helper.isValid('text', defaultFormParams.text),
        color1: !Helper.isValid('color1', defaultFormParams.color1),
        color2: !Helper.isValid('color2', defaultFormParams.color2),
        link: !Helper.isValid('link', defaultFormParams.link),
      },
      errorMessage: '',
    };
    this.updateParam = this.updateParam.bind(this);
    this.paramsToDefault = this.paramsToDefault.bind(this);
    this.downloadAsPNG = this.downloadAsPNG.bind(this);
    this.downloadAsHTML = this.downloadAsHTML.bind(this);
    this.updateErrorMessage = this.updateErrorMessage.bind(this);
    this.copyFormParams = this.copyFormParams.bind(this);
  }

  updateParam(paramName, value) {
    const isValidValue = Helper.isValid(paramName, value);

    this.setState((state) => {
      const newState = Helper.copyObj(state);
      if (isValidValue) newState.validFormParams[paramName] = value;
      newState.formParams[paramName] = value;
      newState.paramsWithError[paramName] = !isValidValue;
      return newState;
    });

    //get actual state and update error message
    Promise.resolve().then(() => {
      const errorMessage = Object.entries(this.state.paramsWithError).reduce(
        (acc, keyValue) => {
          const [key, value] = keyValue;
          return (
            acc +
            (value ? `${key} should match: ${Helper.patterns[key]}}\n` : '')
          );
        },
        ''
      );

      this.updateErrorMessage(errorMessage);
    });
  }

  updateErrorMessage(errorMessage) {
    this.setState({ errorMessage: errorMessage });
  }

  paramsToDefault() {
    for (let key of Object.keys(defaultFormParams)) {
      this.updateParam(key, defaultFormParams[key]);
    }
  }

  downloadAsPNG() {
    html2canvas(document.querySelector('.banner'), {
      allowTaint: true,
    }).then((canvas) => {
      try {
        Helper.downloadCanvas(canvas, 'image.png');
      } catch (error) {
        this.updateErrorMessage(error.message);
      }
    });
  }

  downloadAsHTML() {
    try {
      const html = ReactDOMServer.renderToString(
        <Banner
          params={this.state.validFormParams}
          onUpdateErrorMessage={this.updateErrorMessage}
        />
      );
      Helper.downloadText(html, 'banner.html');
    } catch {
      this.updateErrorMessage(`Can't download as html`);
    }
  }

  copyFormParams() {
    try {
      navigator.clipboard.writeText(JSON.stringify(this.state.validFormParams));
    } catch {
      this.updateErrorMessage(`Can't copy settings`);
    }
  }

  render() {
    return (
      <div className='app'>
        <header className='header'>
          <div className='header__title'>
            BANNER CREATOR
            <div className='header__subtitle'>
              Created by Smirnov Alexandr with React
            </div>
          </div>

          <div className='header__error-field'>{this.state.errorMessage}</div>
        </header>
        <div className='container'>
          <div className='banner-container'>
            <div className='banner-container__banner-preview'>
              Banner preview
            </div>
            <Banner
              params={this.state.validFormParams}
              onUpdateErrorMessage={this.updateErrorMessage}
            />
            <div className='export-button button' onClick={this.downloadAsPNG}>
              <div className='button__text'>Export as PNG</div>
            </div>
            <div className='export-button button' onClick={this.downloadAsHTML}>
              <div className='button__text'>Export as HTML</div>
            </div>
          </div>
          <BannerForm
            params={this.state.formParams}
            onParamsToDefault={this.paramsToDefault}
            onUpdateParam={this.updateParam}
            paramsWithError={this.state.paramsWithError}
            onCopyFormParams={this.copyFormParams}
          />
        </div>
      </div>
    );
  }
}
