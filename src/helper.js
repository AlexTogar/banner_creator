/**
 *
 * @param {HTMLCanvasElement} canvas
 * @param {string} name file name
 */
function download(canvas, name) {
  let a = document.querySelector('.download');
  a.download = name;
  a.href = canvas.toDataURL();
  a.click();
}

/**
 *
 * @param {Object} obj
 * @return {Object} copy
 */
function copyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 *
 * @param {string} paramName
 * @param {string} value
 * @returns {boolean}
 */
function checkPattern(paramName, value) {
  const patterns = {
    imageURL: /^(https|http):\/\/.*$/,
    text: /.*/,
    color1: /^#([0-9A-F]{3}){1,2}$/i,
    color2: /(^#([0-9A-F]{3}){1,2}$)|^$/i,
    link: /^(https)|(http):\/\/.*/,
  };

  return patterns[paramName].test(value);
}

export { download, copyObj, checkPattern };
