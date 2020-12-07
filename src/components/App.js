import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';
import Banner from './Banner';
import BannerForm from './BannerForm';
import { copyObj, isValid, downloadCanvas, downloadText } from '../helper';
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
      validFormParams: copyObj(defaultFormParams),
      formParams: copyObj(defaultFormParams),
      paramsWithError: {
        imageURL: !isValid('imageURL', defaultFormParams.imageURL),
        text: !isValid('text', defaultFormParams.text),
        color1: !isValid('color1', defaultFormParams.color1),
        color2: !isValid('color2', defaultFormParams.color2),
        link: !isValid('link', defaultFormParams.link),
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
    const isValidValue = isValid(paramName, value);
    const paramsWithError = copyObj(this.state.paramsWithError);
    paramsWithError[paramName] = !isValidValue;

    this.setState((state) => {
      if (isValidValue) state.validFormParams[paramName] = value;
      state.formParams[paramName] = value;
      state.paramsWithError = paramsWithError;
      return state;
    });

    if (
      Object.values(paramsWithError).reduce((acc, elem) => acc || elem, false)
    ) {
      this.updateErrorMessage('Incorrect input format');
    } else {
      this.updateErrorMessage('');
    }
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
        downloadCanvas(canvas, 'image.png');
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
      downloadText(html, 'banner.html');
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
