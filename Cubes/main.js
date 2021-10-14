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

const BORDERS = {
  white: 'medium solid white',
  black: 'medium solid black'
};

const STYLE_NAMES = {
  color: 'color',
  background: 'background',
  border: 'border'
};

const SOURCES = {
  local: getRandomIntegersFromLocal,
  external: getRandomIntegersFromServer
};

const CONFIGURATIONS = {
  white: {
    [STYLE_NAMES.color]: COLORS.black,
    [STYLE_NAMES.background]: COLORS.white,
    [STYLE_NAMES.border]: BORDERS.black
  },
  black: {
    [STYLE_NAMES.color]: COLORS.white,
    [STYLE_NAMES.background]: COLORS.black,
    [STYLE_NAMES.border]: BORDERS.white
  }
};

// random org constants
const apiKey = '5c5ca4c7-aa19-440c-b885-5f0b0ba44711';
const randomOrgUrl = 'https://api.random.org/json-rpc/4/invoke';
const methodName = 'generateSignedIntegers';


let button = document.querySelector("#nextRandomButton");
let changeSource = document.querySelector("#changeSource");
let resultTextDiv = document.querySelector("#resultText");
let currentSource = {
  getData: SOURCES.external
};

const setBackgroundColor = (color) => {
  document.body.style.background = color;
};

const setStyleConfiguration = (element, configuration) => {
  for (let property in configuration) {
    element.style[property] = configuration[property];
  }
};

button.addEventListener('click', async (event) => {
  if (document.body.style.background === COLORS.yellow) {
    event.preventDefault();
    return;
  }

  setBackgroundColor(COLORS.yellow);
  try {
    let randoms = await currentSource.getData(MINVALUE, MAXVALUE, CUBESCOUNTER);
    setBackgroundColor(COLORS.green);
    resultTextDiv.innerHTML = randoms;
    console.log(randoms);
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
    currentSource.getData = SOURCES.local;
    setStyleConfiguration(resultTextDiv, CONFIGURATIONS.black);
  } else {
    currentSource.getData = SOURCES.external;
    setStyleConfiguration(resultTextDiv, CONFIGURATIONS.white);
  }
};

async function getRandomIntegersFromLocal(min, max, n) {
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
  const getRandomInteger = (min, max) => {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  };

  let result = [];
  while (n--) {
    result.push(getRandomInteger(min, max));
  }

  return result;
}

async function getRandomIntegersFromServer(min, max, n) {
  let response = await fetch(randomOrgUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "jsonrpc": "2.0",
      "method": methodName,
      "params": {
        "apiKey": apiKey,
        "n": n,
        "min": min,
        "max": max,
        "replacement": true,
        "base": 10
      },
      "id": 86369
    })
  });

  if (!response.ok) {
    throw new Error('ApiKey is expired');
  }
  //console.log(response);

  let jsonString = await response.text();
  let parsed = JSON.parse(jsonString);
  let result = parsed.result;
  return result.random.data;
}


// initialization
setBackgroundColor(COLORS.green);
setStyleConfiguration(resultTextDiv, CONFIGURATIONS.white);