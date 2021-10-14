export default class StyleSetter {
  setBackgroundColor(element, color)  {
    element.style.background = color;
  };

  setLinkHref(element, href) {
    element.href = href;
  };
}