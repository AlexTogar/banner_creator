import React, { Component } from 'react';

export default class BannerParametersForm extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateParam = this.handleUpdateParam.bind(this);
  }

  handleUpdateParam(event) {
    const paramName = event.target.attributes.paramname.value;
    this.props.onUpdateParam(paramName, event.target.value);
  }

  render() {
    const params = this.props.params;
    const paramsWithError = this.props.paramsWithError;
    return (
      <div className='banner-form'>
        <div className='banner-form__title'>
          <div className='banner-form__icon icon'></div>
          <div className='banner-form__text'>Customize your banner</div>
          <div
            className='banner-form__default-button button'
            onClick={() => {
              this.props.onParamsToDefault();
            }}
          >
            <div className='button__text'>Set to default</div>
            <div className='banner-form__default-icon button__icon icon'></div>
          </div>
        </div>

        <form action='' className='banner-form__form'>
          <label className='banner-form__label'>Image URL</label>
          <input
            className={`banner-form__input ${
              paramsWithError.imageURL ? 'banner-form__input_err-outlined' : ''
            }`}
            onChange={this.handleUpdateParam}
            paramname='imageURL'
            type='text'
            placeholder='URL of an image'
            value={params.imageURL}
          />
          <label className='banner-form__label'>Text</label>
          <textarea
            className={`banner-form__input banner-form__textarea ${
              paramsWithError.text ? 'banner-form__input_err-outlined' : ''
            }`}
            onChange={this.handleUpdateParam}
            paramname='text'
            rows='10'
            placeholder='Your text'
            value={params.text}
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
              className={`banner-form__input banner-form__input_short ${
                paramsWithError.color1 ? 'banner-form__input_err-outlined' : ''
              }`}
              onChange={this.handleUpdateParam}
              paramname='color1'
              type='text'
              placeholder='#fff'
              value={params.color1}
            />
            <input
              className={`banner-form__input banner-form__input_short ${
                paramsWithError.color2 ? 'banner-form__input_err-outlined' : ''
              }`}
              onChange={this.handleUpdateParam}
              paramname='color2'
              type='text'
              placeholder='#000'
              value={params.color2}
            />
          </div>
          <label className='banner-form__label'>Link</label>
          <input
            className={`banner-form__input  ${
              paramsWithError.link ? 'banner-form__input_err-outlined' : ''
            }`}
            onChange={this.handleUpdateParam}
            paramname='link'
            type='text'
            placeholder='Your  link'
            value={params.link}
          />
        </form>
        <div
          className='export-button button'
          onClick={() => {
            this.props.onCopyFormParams();
          }}
        >
          <div className='button__text'>Copy settings</div>
          <div className='export-button__icon button__icon icon'></div>
        </div>
    </div>
    );
  }
}
