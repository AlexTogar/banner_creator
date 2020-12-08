import React from 'react';
export default function Banner(props) {
  const BANNER_WIDTH = 760;
  const BANNER_HEIGHT = 500;
  const LINE_HEIGHT = 40;
  const params = props.params;

  const bannerStyle = {
    cursor: 'pointer',
    textDecoration: 'none',
    height: BANNER_HEIGHT + 'px',
    maxWidth: BANNER_WIDTH + 'px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: `linear-gradient(${params.color1}, ${
      params.color2 || params.color1
    })`,
  };

  const imageStyle = {
    maxHeight: '50%',
    maxWidth: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  const textStyle = {
    lineHeight: LINE_HEIGHT + 'px',
    maxHeight: LINE_HEIGHT * 3 + 'px',
    color: '#284268',
    fontSize: '30px',
    fontWeight: '600',
    width: '60%',
    display: 'flex',
    textDecoration: 'none',
    overflow: 'hidden',
  };

  const text = props.params.text;

  return (
    <a href={params.link} className='banner' style={bannerStyle}>
      <img
        src={params.imageURL}
        onError={() => {
          props.onUpdateErrorMessage('Cannot get an image at this address');
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
