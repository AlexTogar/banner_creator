import React, { Component } from 'react';
import Banner from './Banner';
import BannerForm from './BannerForm';
import defaultFormParams from '../defaultFormParams.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formParameters: defaultFormParams,
    };
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
            <Banner params={this.state.formParameters} />
            <div className='export-button button'>
              <div className='button__text'>Export as PNG</div>
            </div>
            <div className='export-button button'>
              <div className='button__text'>Export as HTML</div>
            </div>
          </div>
          <BannerForm params={this.state.formParameters} />
        </div>
      </div>
    );
  }
}
