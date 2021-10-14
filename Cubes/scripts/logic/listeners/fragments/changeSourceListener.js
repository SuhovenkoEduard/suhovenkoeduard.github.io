export default class ChangeSourceListener {
  constructor(htmlElements, store, currentProvider, serverProvider, localProvider, styleSetter) {
    this.htmlElements = htmlElements;
    this.store = store;
    this.currentProvider = currentProvider;
    this.serverProvider = serverProvider;
    this.localProvider = localProvider;
    this.styleSetter = styleSetter;
  }

  async click(event) {
    if (this.store.params.started) {
      event.preventDefault();
      return;
    }

    if (this.htmlElements.changeSource.checked) {
      this.currentProvider.value = this.serverProvider;
      this.styleSetter.setLinkHref(this.htmlElements.configurationLink, this.store.styles.configurations.white);
    } else {
      this.currentProvider.value = this.localProvider;
      this.styleSetter.setLinkHref(this.htmlElements.configurationLink, this.store.styles.configurations.black);
    }
  }
}