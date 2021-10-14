export default class PushButtonListener {
  constructor(htmlElements, store, styleSetter, currentProvider) {
    this.htmlElements = htmlElements;
    this.store = store;
    this.styleSetter = styleSetter;
    this.currentProvider = currentProvider;
  }

  async click(event) {
    if (this.store.params.started) {
      return;
    }

    this.store.params.started = true;
    this.styleSetter.setBackgroundColor(this.htmlElements.body, this.store.styles.colors.yellow);
    try {
      let randoms = await this.currentProvider.value.getRandomIntegers(
        this.store.params.minvalue,
        this.store.params.maxvalue,
        this.store.params.cubesCounter
      );

      if (this.store.params.started === false) {
        return;
      }

      this.styleSetter.setBackgroundColor(this.htmlElements.body, this.store.styles.colors.green);
      this.htmlElements.resultTextDiv.innerHTML = randoms;
    } catch (error) {
      this.styleSetter.setBackgroundColor(this.htmlElements.body, this.store.styles.colors.red);
      console.log(error);
    }

    this.store.params.started = false;
  }
}