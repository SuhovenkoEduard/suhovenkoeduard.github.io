import links from "./links.js";
import { ids } from "./links.js"

const sourceLabels = {
  white: 'True random enabled',
  black: 'True random disabled'
};

// other
const body = document.body;
const pushButton = document.querySelector(".button.push");
const cancelButton = document.querySelector(".button.cancel")
const changeButton = document.querySelector("#changeSource");
const resultTextDiv = document.querySelector("#text");
const sourceLabel = document.querySelector('#sourceLabel');

class UI {
  constructor() {
    this.body = body;
    this.pushButton = pushButton;
    this.changeButton = changeButton;
    this.cancelButton = cancelButton;
    this.resultTextDiv = resultTextDiv;
    this.sourceLabel = sourceLabel;
  }

  changeResult(randoms) {
    this.resultTextDiv.innerHTML = randoms;
  }

  changeState(stateName) {
    if (document.getElementById(ids.states) !== null) {
      document.getElementById(ids.states).remove();
    }

    document.head.appendChild(links.states[stateName]);
  }

  changeConfiguration(configurationName) {
    this.sourceLabel.innerHTML = sourceLabels[configurationName];

    if (document.getElementById(ids.configurations) !== null) {
      document.getElementById(ids.configurations).remove();
    }

    if (document.getElementById(ids.sourceLabels) !== null) {
      document.getElementById(ids.sourceLabels).remove();
    }

    document.head.appendChild(links.configurations[configurationName]);
    document.head.appendChild(links.sourceLabels[configurationName]);
  }
}

export default new UI();