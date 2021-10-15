const configurationsPath = 'styles/result/configurations/';
const statesPath = 'styles/result/states/';
const sourceLabelPath = 'styles/connection/states/';
const sourceLabels = {
  white: 'True random enabled',
  black: 'True random disabled'
};

// links
const configurationLink = document.querySelector('#configurationLink');
const stateLink = document.querySelector('#stateLink');
const sourceLabelLink = document.querySelector('#sourceLabelLink');

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
    this.configurationLink = configurationLink;
    this.stateLink = stateLink;
    this.pushButton = pushButton;
    this.changeButton = changeButton;
    this.cancelButton = cancelButton;
    this.resultTextDiv = resultTextDiv;
    this.sourceLabelLink = sourceLabelLink;
    this.sourceLabel = sourceLabel;
  }

  changeResult(randoms) {
    this.resultTextDiv.innerHTML = randoms;
  }

  changeState(stateName) {
    this.stateLink.href = statesPath + stateName + '.css';
  }

  changeConfiguration(configurationName) {
    this.sourceLabel.innerHTML = sourceLabels[configurationName];
    this.sourceLabelLink.href = sourceLabelPath + configurationName + '.css';
    this.configurationLink.href = configurationsPath + configurationName + '.css';
  }
}

export default new UI();