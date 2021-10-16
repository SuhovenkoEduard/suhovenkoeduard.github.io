import states from "./states/states.js";

class Randomizer {
  constructor(UI, store, providers) {
    this.UI = UI;
    this.store = store;
    this.providers = providers;
    this.currentProvider = providers.server;
    this.changeState(new states.Success(this));
  }

  async sendRequest() {
    try {
      let randoms = await this.currentProvider.getRandomIntegers(
        this.store.params.minValue,
        this.store.params.maxValue,
        this.store.params.cubesCounter,
      );

      this.state.changeResult(randoms);
    } catch (error) {
      console.log(error);
      this.state.showError(error);
    }
  }

  changeResult(randoms) {
    this.UI.changeResult(randoms);
    this.changeState(new states.Success(this));
  }

  changeState(state) {
    this.state = state;
    this.UI.changeState(state.getName());
    this.updateProvider();
  }

  updateProvider() {
    let checked = this.UI.changeButton.checked;
    let configurationName = checked? 'white' : 'black';
    this.currentProvider = checked ? this.providers.server : this.providers.local;
    this.UI.changeConfiguration(configurationName);
  }

  // click
  clickPush(event) {
    this.state.clickPush(event);
  }

  clickChange(event) {
    this.state.clickChange(event);
  }

  clickCancel(event) {
    this.state.clickCancel(event);
  }
}

export default Randomizer;