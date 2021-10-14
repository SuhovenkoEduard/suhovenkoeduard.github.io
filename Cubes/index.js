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
const pushButton = document.querySelector(".button.push");
const cancelButton = document.querySelector(".button.cancel")
const changeSource = document.querySelector("#changeSource");
const resultTextDiv = document.querySelector("#text");

// listeners
pushButton.addEventListener('click', async (event) => {
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

    if (store.params.canceled) {
      store.params.canceled = false;
      return;
    }

    styleSetter.setBackgroundColor(body, store.styles.colors.green);
    resultTextDiv.innerHTML = randoms;
  } catch (error) {
    styleSetter.setBackgroundColor(body, store.styles.colors.red);
    console.log(error);
  }
});

cancelButton.addEventListener('click', (event) => {
  store.params.canceled = true;
  styleSetter.setBackgroundColor(body, store.styles.colors.green);
});

changeSource.addEventListener('click', (event) => {
  if (body.style.background === store.styles.colors.yellow) {
    event.preventDefault();
    return;
  }

  if (changeSource.checked) {
    currentProvider = serverProvider;
    styleSetter.setLinkHref(configurationLink, store.styles.configurations.white);
  } else {
    currentProvider = localProvider;
    styleSetter.setLinkHref(configurationLink, store.styles.configurations.black);
  }
});

// initialization
styleSetter.setBackgroundColor(body, store.styles.colors.green);
styleSetter.setLinkHref(configurationLink, store.styles.configurations.white);