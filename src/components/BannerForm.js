import React, { Component } from 'react';

export default class BannerParametersForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='banner-form'>
        <div className='banner-form__title'>
          <div className='banner-form__icon icon'></div>
          <div className='banner-form__text'>Customize your banner</div>
          <div className='banner-form__default-button button'>
            <div className='button__text'>Set to default</div>
            <div className='banner-form__default-icon button__icon icon'></div>
          </div>
        </div>

        <form action='' className='banner-form__form'>
          <label className='banner-form__label'>Image URL</label>
          <input
            className='banner-form__input'
            type='text'
            placeholder='URL of an image'
          />
          <label className='banner-form__label'>Text</label>
          <textarea
            className='banner-form__input banner-form__textarea'
            rows='10'
            placeholder='Your text'
          ></textarea>
          <div className='banner-form__colors-container'>
            <label className='banner-form__label banner-form__color-label'>
              Color#1
            </label>
            <label className='banner-form__label banner-form__color-label'>
              Color#2
              <span className='banner-form__text-optional'>(optional)</span>
            </label>
            <input
              className='banner-form__input banner-form__input_short'
              type='text'
              placeholder='#fff'
            />
            <input
              className='banner-form__input banner-form__input_short'
              type='text'
              placeholder='#000'
            />
          </div>
          <label className='banner-form__label'>Link</label>
          <input
            className='banner-form__input '
            type='text'
            placeholder='Your  link'
          />
        </form>
        <div className='export-button button'>
          <div className='button__text'>Export settings</div>
          <div className='export-button__icon button__icon icon'></div>
        </div>
      </div>
    );
  }
}
