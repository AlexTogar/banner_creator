export default {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {string} name file name
   * @returns {void}
   */
  downloadCanvas: function (canvas, name) {
    const a = document.createElement('a');
    a.download = name;
    a.href = canvas.toDataURL();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  /**
   *
   * @param {string} text
   * @param {string} name
   * @returns {void}
   */
  downloadText: function (text, name) {
    const a = document.createElement('a');
    const file = new Blob([text], {
      type: 'text/html',
    });
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  /**
   *
   * @param {Object} obj
   * @returns {Object} copy
   */
  copyObj: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  patterns: {
    imageURL: /(^(https|http):\/\/.*$)|(^data:image\/svg\+xml;base64,.*$)/,
    text: /.*/,
    color1: /^#([0-9A-F]{3}){1,2}$/i,
    color2: /(^#([0-9A-F]{3}){1,2}$)|^$/i,
    link: /^((https)|(http)):\/\/.*/,
  },

  /**
   *
   * @param {string} paramName
   * @param {string} value
   * @returns {boolean}
   */
  isValid: function (paramName, value) {
    return this.patterns[paramName].test(value);
  },
};
