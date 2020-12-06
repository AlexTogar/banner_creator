function download(canvas, name) {
  let a = document.querySelector('.download');
  a.download = name;
  a.href = canvas.toDataURL();
  a.click();
}

export { download };
