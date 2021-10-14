import ServerProvider from "./scripts/server/server.js";
import LocalProvider from "./scripts/local/local.js";

const MINVALUE = 1;
const MAXVALUE = 6;
const CUBESCOUNTER = 2;
const TIMEOUT = 500;

const COLORS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  purple: 'purple',
  black: 'black',
  white: 'white'
};

const CONFIGURATIONS = {
  white: 'styles/result/configurations/white.css',
  black: 'styles/result/configurations/black.css'
}

// random org constants
const randomOrgUrl = 'https://api.random.org/json-rpc/4/invoke';
const methodName = 'generateSignedIntegers';
const apiKey = '5c5ca4c7-aa19-440c-b885-5f0b0ba44711';

const serverProvider = new ServerProvider(randomOrgUrl, methodName, apiKey);
const localProvider = new LocalProvider(TIMEOUT);

let configurationLink = document.querySelector('#configurationLink');
let button = document.querySelector("#nextRandomButton");
let changeSource = document.querySelector("#changeSource");
let resultTextDiv = document.querySelector("#text");
let currentProvider = serverProvider;

const setBackgroundColor = (color) => {
  document.body.style.background = color;
};

const setStyleConfiguration = (element, configuration) => {
  element.href = configuration;
};

button.addEventListener('click', async (event) => {
  if (document.body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  setBackgroundColor(COLORS.yellow);
  try {
    let randoms = await currentProvider.getRandomIntegers(MINVALUE, MAXVALUE, CUBESCOUNTER);
    setBackgroundColor(COLORS.green);
    resultTextDiv.innerHTML = randoms;
  } catch (error) {
    setBackgroundColor(COLORS.red);
    console.log(error);
  }
});

changeSource.onclick = (event) => {
  if (document.body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  if (changeSource.checked) {
    currentProvider = localProvider;
    setStyleConfiguration(configurationLink, CONFIGURATIONS.black);
  } else {
    currentProvider = serverProvider;
    setStyleConfiguration(configurationLink, CONFIGURATIONS.white);
  }
};

// initialization
setBackgroundColor(COLORS.green);
setStyleConfiguration(configurationLink, CONFIGURATIONS.white);