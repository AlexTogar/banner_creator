import React, { Component } from 'react';
export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const MAX_SYMBOLS_NUMBER = 114;
    const BANNER_WIDTH = '760px';
    const BANNER_HEIGHT = '500px';
    const params = this.props.params;

    const bannerStyle = {
      cursor: 'pointer',
      textDecoration: 'none',
      height: BANNER_HEIGHT,
      maxWidth: BANNER_WIDTH,
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      background: `linear-gradient(45deg, ${params.color1}, ${
        params.color2 || params.color1
      })`,
    };

    const imageStyle = {
      // backgroundImage: `url(${params.imageURL})`,
      maxHeight: '50%',
      maxWidth: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    const textStyle = {
      color: 'black',
      fontSize: '30px',
      fontWeight: '600',
      width: '60%',
      display: 'flex',
      textDecoration: 'none',
      maxHeight: '105px',
      overflow: 'hidden',
    };

    const text = this.props.params.text;

    return (
      <a href={params.link} className='banner' style={bannerStyle}>
        <img
          src={params.imageURL}
          onError={() => {
            this.props.onUpdateErrorMessage(
              'Cannot get an image at this address'
            );
          }}
          className='banner__image'
          style={imageStyle}
          crossOrigin='anonymous'
        />
        <div className='banner__text' style={textStyle}>
          <span
            style={{
              margin: '0 auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {text}
          </span>
        </div>
      </a>
    );
  }
}
