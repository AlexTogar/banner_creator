import React, { Component } from 'react';
import Banner from './Banner';
import BannerForm from './BannerForm';
import defaultFormParams from '../defaultFormParams.json';
import { copyObj, checkPattern } from '../helper';

/*defaultFormParams === {
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
      formParams: copyObj(defaultFormParams),
      paramsWithError: {
        imageURL: !checkPattern('imageURL', defaultFormParams.imageURL),
        text: !checkPattern('text', defaultFormParams.text),
        color1: !checkPattern('color1', defaultFormParams.color1),
        color2: !checkPattern('color2', defaultFormParams.color2),
        link: !checkPattern('link', defaultFormParams.link),
      },
    };
    this.updateParam = this.updateParam.bind(this);
  }

  updateParam(paramName, value) {
    // if (value === '') value = defaultFormParams[paramName];
    console.log(!checkPattern(paramName, value));
    this.setState((state) => {
      state.formParams[paramName] = value;
      state.paramsWithError[paramName] = !checkPattern(paramName, value);
      console.log(state);
      return state;
    });
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

          <div className='header__error-field'>
            Error: text of custom Error which hides in 3 sec
          </div>
        </header>
        <div className='container'>
          <div className='banner-container'>
            <div className='banner-container__banner-preview'>
              Banner preview
            </div>
            <Banner params={this.state.formParams} />
            <div className='export-button button'>
              <div className='button__text'>Export as PNG</div>
            </div>
            <div className='export-button button'>
              <div className='button__text'>Export as HTML</div>
            </div>
          </div>
          <BannerForm
            params={this.state.formParams}
            onUpdateParam={this.updateParam}
            paramsWithError={this.state.paramsWithError}
          />
        </div>
      </div>
    );
  }
}
