/**
 *
 * @param {HTMLCanvasElement} canvas
 * @param {string} name file name
 */
function downloadCanvas(canvas, name) {
  const a = document.createElement('a');
  a.download = name;
  a.href = canvas.toDataURL();
  document.body.appendChild(element);
  a.click();
  document.body.removeChild(a);
}

function downloadText(text, name) {
  const a = document.createElement('a');
  const file = new Blob([text], {
    type: 'text/plain',
  });
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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
function isValid(paramName, value) {
  const patterns = {
    imageURL: /(^(https|http):\/\/.*$)|(^data:image\/svg\+xml;base64,.*$)/,
    text: /.*/,
    color1: /^#([0-9A-F]{3}){1,2}$/i,
    color2: /(^#([0-9A-F]{3}){1,2}$)|^$/i,
    link: /^(https)|(http):\/\/.*/,
  };

  return patterns[paramName].test(value);
}

export { downloadCanvas, downloadText, copyObj, isValid, exampleDataURI };

const pos = `
1) ошибка заполнения формы
2) ошибка скачинвия png 
4) ошибка ссылки картинки
3) неизвестная ошибка
`;

const exampleDataURI =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0zOS42MDQ5IDE1LjU2MzZDNDAuMTMxNiAxNS4wMzcgNDAuMTMxNiAxNC4xODMxIDM5LjYwNDkgMTMuNjU2NEwzNy41ODEgMTEuNjMyNEMzNy4xMjMyIDExLjE3NDcgMzYuNDA0NiAxMS4xMDY4IDM1Ljg2OTMgMTEuNDcwNkwzMS42MTM3IDE0LjM2M0wzNC40ODg1IDEwLjA3ODZDMzQuODQ3NSA5LjU0MzU3IDM0Ljc3NzkgOC44MjkxNSAzNC4zMjIyIDguMzczNTdMMjkuOTMxOSAzLjk4MzNDMjkuNTI2NiAzLjU3Nzk4IDI4LjkwOTUgMy40NzMwNiAyOC4zOTMyIDMuNzIxODRMMjcuNjM0MSA0LjA4NzMyTDI3Ljk5NzYgMy4yODA4M0MyOC4yMjggMi43Njk3IDI4LjExODIgMi4xNjk0NiAyNy43MjE4IDEuNzcyOTZMMjYuMzQzNiAwLjM5NTAxMUMyNS44MTcgLTAuMTMxNTg5IDI0Ljk2MzEgLTAuMTMxNTg5IDI0LjQzNjQgMC4zOTUwMTFMMTMuNzMxOCAxMS4wOTk1TDI4LjkwMDQgMjYuMjY4MkwzOS42MDQ5IDE1LjU2MzZaIiBmaWxsPSIjNzg4Q0RFIi8+CjxwYXRoIGQ9Ik0xMS43Mzg2IDEzLjA5MjhMOC42Mzk3OCAxNi4xOTE2QzguMzg2ODcgMTYuNDQ0NSA4LjI0NDcyIDE2Ljc4NzUgOC4yNDQ3MiAxNy4xNDUyQzguMjQ0NzIgMTcuNTAyOCA4LjM4Njc4IDE3Ljg0NTkgOC42Mzk3OCAxOC4wOTg4TDExLjU3OTMgMjEuMDM4M0MxMi4xNDU2IDIxLjYwNDYgMTIuNDIwMyAyMi4zODYyIDEyLjMzMjkgMjMuMTgyNUMxMi4yNDU2IDIzLjk3ODMgMTEuODA3NiAyNC42ODE5IDExLjEzMTIgMjUuMTEzMUMyLjQ5Mzc1IDMwLjYxOSAxLjY4ODYxIDMxLjQyNDIgMS40MjQxIDMxLjY4ODhDLTAuNDc0Njk5IDMzLjU4NzUgLTAuNDc0Njk5IDM2LjY3NyAxLjQyNDEgMzguNTc1OUMzLjMyNDc4IDQwLjQ3NjYgNi40MTQ0MyA0MC40NzI4IDguMzExMTYgMzguNTc1OUM4LjU3NTg2IDM4LjMxMTMgOS4zODEyNiAzNy41MDU4IDE0Ljg4NjggMjguODY4OEMxNS4zMTY5IDI4LjE5NDEgMTYuMDIwMyAyNy43NTcgMTYuODE2NCAyNy42Njk1QzE3LjYxNTEgMjcuNTgyNCAxOC4zOTY2IDI3Ljg1NTcgMTguOTYxNiAyOC40MjA2TDIxLjkwMTEgMzEuMzYwMUMyMi40Mjc3IDMxLjg4NjcgMjMuMjgxNyAzMS44ODY3IDIzLjgwODMgMzEuMzYwMUwyNi45MDcyIDI4LjI2MTJMMTEuNzM4NiAxMy4wOTI4Wk02LjI5ODE4IDM2LjM5NzZDNS41NTM3MyAzNy4xNDIgNC4zNDY3OSAzNy4xNDIgMy42MDI0MyAzNi4zOTc2QzIuODU3OTcgMzUuNjUzMSAyLjg1Nzk3IDM0LjQ0NjIgMy42MDI0MyAzMy43MDE4QzQuMzQ2ODggMzIuOTU3NCA1LjU1MzgyIDMyLjk1NzQgNi4yOTgxOCAzMy43MDE4QzcuMDQyNjMgMzQuNDQ2MiA3LjA0MjYzIDM1LjY1MzEgNi4yOTgxOCAzNi4zOTc2WiIgZmlsbD0iIzc4OENERSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=';
