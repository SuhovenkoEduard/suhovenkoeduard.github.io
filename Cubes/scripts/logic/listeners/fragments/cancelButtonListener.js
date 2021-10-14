export default class CancelButtonListener {
  constructor(store, htmlElements, styleSetter) {
    this.store = store;
    this.htmlElements = htmlElements;
    this.styleSetter = styleSetter;
  }

  async click(event) {
    if (this.store.params.started) {
      this.store.params.started = false;
      this.styleSetter.setBackgroundColor(this.htmlElements.body, this.store.styles.colors.orange);
    }
  }
}