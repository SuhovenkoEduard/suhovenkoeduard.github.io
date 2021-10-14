export default class StyleSetter {
  constructor(resultStylesPath) {
    this.resultStylesPath = resultStylesPath;
  }

  setBackgroundColor(element, color)  {
    element.style.background = color;
  };

  setLinkHref(element, filename) {
    element.href = this.resultStylesPath + filename + '.css';
  };
}