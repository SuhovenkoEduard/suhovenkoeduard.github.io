import ServerProvider from "./scripts/server/server.js";
import LocalProvider from "./scripts/local/local.js";
import StyleSetter from "./scripts/styleSetter/styleSetter.js";

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
  whiteHref: 'styles/result/configurations/white.css',
  blackHref: 'styles/result/configurations/black.css'
}

// random org constants
const randomOrgUrl = 'https://api.random.org/json-rpc/4/invoke';
const methodName = 'generateSignedIntegers';
const apiKey = '5c5ca4c7-aa19-440c-b885-5f0b0ba44711';

const styleReducer = new StyleSetter();
const serverProvider = new ServerProvider(randomOrgUrl, methodName, apiKey);
const localProvider = new LocalProvider(TIMEOUT);
let currentProvider = serverProvider;

const body = document.body;
const configurationLink = document.querySelector('#configurationLink');
const button = document.querySelector("#nextRandomButton");
const changeSource = document.querySelector("#changeSource");
const resultTextDiv = document.querySelector("#text");

button.addEventListener('click', async (event) => {
  if (body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  styleReducer.setBackgroundColor(body, COLORS.yellow);
  try {
    let randoms = await currentProvider.getRandomIntegers(MINVALUE, MAXVALUE, CUBESCOUNTER);
    styleReducer.setBackgroundColor(body, COLORS.green);
    resultTextDiv.innerHTML = randoms;
  } catch (error) {
    styleReducer.setBackgroundColor(body, COLORS.red);
    console.log(error);
  }
});

changeSource.onclick = (event) => {
  if (body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  if (changeSource.checked) {
    currentProvider = localProvider;
    styleReducer.setLinkHref(configurationLink, CONFIGURATIONS.blackHref);
  } else {
    currentProvider = serverProvider;
    styleReducer.setLinkHref(configurationLink, CONFIGURATIONS.whiteHref);
  }
};

// initialization
styleReducer.setBackgroundColor(body, COLORS.green);
styleReducer.setLinkHref(configurationLink, CONFIGURATIONS.whiteHref);