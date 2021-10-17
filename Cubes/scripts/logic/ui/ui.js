import store from "../../store/store.js";

const pushButton = document.querySelector(".button.push");
const cancelButton = document.querySelector(".button.cancel")
const changeButton = document.querySelector("#changeSource");
const resultDiv = document.querySelector('.resultContent');
const resultTextDiv = document.querySelector(".resultContent .text");
const sourceLabel = document.querySelector('#sourceLabel');

class UI {
  constructor() {
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
    this.applyStyles(this.pushButton, store.styles.pushButtons[stateName]);
    this.applyStyles(this.cancelButton, store.styles.cancelButtons[stateName]);
  }

  changeConfiguration(configurationName) {
    this.sourceLabel.innerHTML = store.styles.sourceLabelStrings[configurationName];
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
