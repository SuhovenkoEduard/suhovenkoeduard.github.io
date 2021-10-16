import store from "../../store/store.js";

const sourceLabels = {
  white: 'True random enabled',
  black: 'True random disabled'
};

// other
const body = document.body;
const pushButton = document.querySelector(".button.push");
const cancelButton = document.querySelector(".button.cancel")
const changeButton = document.querySelector("#changeSource");
const resultDiv = document.querySelector('#result');
const resultTextDiv = document.querySelector("#text");
const sourceLabel = document.querySelector('#sourceLabel');

class UI {
  constructor() {
    this.body = body;
    this.pushButton = pushButton;
    this.changeButton = changeButton;
    this.cancelButton = cancelButton;
    this.resultDiv = resultDiv;
    this.resultTextDiv = resultTextDiv;
    this.sourceLabel = sourceLabel;
  }

  changeResult(randoms) {
    this.resultTextDiv.innerHTML = randoms;
  }

  changeState(stateName) {
    this.applyStyles(this.resultDiv, store.styles.states[stateName]);
  }

  changeConfiguration(configurationName) {
    this.sourceLabel.innerHTML = sourceLabels[configurationName];
    this.applyStyles(this.resultTextDiv, store.styles.configurations[configurationName]);
    this.applyStyles(this.sourceLabel, store.styles.sourceLabels[configurationName]);
  }

  applyStyles(element, styles) {
    for (let property in styles) {
      element.style[property] = styles[property];
    }
  }
}

export default new UI();