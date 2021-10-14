import ServerProvider from "./scripts/server/server.js";
import LocalProvider from "./scripts/local/local.js";
import StyleSetter from "./scripts/styleSetter/styleSetter.js";

import {randomOrgUrl, methodName, apiKey} from "./scripts/data/randomOrg.js";

const MINVALUE = 1;
const MAXVALUE = 6;
const CUBESCOUNTER = 2;
const TIMEOUT = 500;
const resultStylesPath = 'styles/result/configurations/';

const COLORS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  black: 'black',
  white: 'white'
};

const CONFIGURATIONS = {
  white: 'white',
  black: 'black'
}

// data providers
const styleSetter = new StyleSetter(resultStylesPath);
const serverProvider = new ServerProvider(randomOrgUrl, methodName, apiKey);
const localProvider = new LocalProvider(TIMEOUT);
let currentProvider = serverProvider;

// html elements
const body = document.body;
const configurationLink = document.querySelector('#configurationLink');
const button = document.querySelector("#nextRandomButton");
const changeSource = document.querySelector("#changeSource");
const resultTextDiv = document.querySelector("#text");

// listeners
button.addEventListener('click', async (event) => {
  if (body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  styleSetter.setBackgroundColor(body, COLORS.yellow);
  try {
    let randoms = await currentProvider.getRandomIntegers(MINVALUE, MAXVALUE, CUBESCOUNTER);
    styleSetter.setBackgroundColor(body, COLORS.green);
    resultTextDiv.innerHTML = randoms;
  } catch (error) {
    styleSetter.setBackgroundColor(body, COLORS.red);
    console.log(error);
  }
});

changeSource.addEventListener('click', (event) => {
  if (body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  if (changeSource.checked) {
    currentProvider = localProvider;
    styleSetter.setLinkHref(configurationLink, CONFIGURATIONS.black);
  } else {
    currentProvider = serverProvider;
    styleSetter.setLinkHref(configurationLink, CONFIGURATIONS.white);
  }
});

// initialization
styleSetter.setBackgroundColor(body, COLORS.green);
styleSetter.setLinkHref(configurationLink, CONFIGURATIONS.white);