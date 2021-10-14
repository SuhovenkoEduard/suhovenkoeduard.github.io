import ServerProvider from "./scripts/server/server.js";
import LocalProvider from "./scripts/local/local.js";
import StyleSetter from "./scripts/styleSetter/styleSetter.js";
import store from "./scripts/data/store.js";


// data providers
const styleSetter = new StyleSetter(store.params.resultStylesPath);
const serverProvider = new ServerProvider(store.random);
const localProvider = new LocalProvider(store.params.timeout);
let currentProvider = serverProvider;

// html elements
const body = document.body;
const configurationLink = document.querySelector('#configurationLink');
const button = document.querySelector("#nextRandomButton");
const changeSource = document.querySelector("#changeSource");
const resultTextDiv = document.querySelector("#text");

// listeners
button.addEventListener('click', async (event) => {
  if (body.style.background === store.styles.colors.yellow) {
    event.preventDefault();
    return;
  }

  styleSetter.setBackgroundColor(body, store.styles.colors.yellow);
  try {
    let randoms = await currentProvider.getRandomIntegers(
      store.params.minvalue,
      store.params.maxvalue,
      store.params.cubesCounter
    );

    styleSetter.setBackgroundColor(body, store.styles.colors.green);
    resultTextDiv.innerHTML = randoms;
  } catch (error) {
    styleSetter.setBackgroundColor(body, store.styles.colors.red);
    console.log(error);
  }
});

changeSource.addEventListener('click', (event) => {
  if (body.style.background === store.styles.colors.yellow) {
    event.preventDefault();
    return;
  }

  if (changeSource.checked) {
    currentProvider = localProvider;
    styleSetter.setLinkHref(configurationLink, store.styles.configurations.black);
  } else {
    currentProvider = serverProvider;
    styleSetter.setLinkHref(configurationLink, store.styles.configurations.white);
  }
});

// initialization
styleSetter.setBackgroundColor(body, store.styles.colors.green);
styleSetter.setLinkHref(configurationLink, store.styles.configurations.white);