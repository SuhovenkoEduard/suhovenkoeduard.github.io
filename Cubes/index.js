// data imports
import store from "./scripts/store/store.js";

// logic imports
import StyleSetter from "./scripts/logic/styleSetter/styleSetter.js";
import providers from "./scripts/logic/providers/providers.js";
import listeners from "./scripts/logic/listeners/listeners.js";
import htmlElements from "./scripts/logic/html/html.js";

// store providers
const styleSetter = new StyleSetter(store.params.resultStylesPath);
const serverProvider = new providers.server(store.random);
const localProvider = new providers.local(store.params.timeout);
const currentProvider = { value: serverProvider };

// listeners
const pushButtonListener = new listeners.Push(
  htmlElements,
  store,
  styleSetter,
  currentProvider
);
const cancelButtonListener = new listeners.Cancel(
  store,
  htmlElements,
  styleSetter
);
const changeSourceListener = new listeners.ChangeSource(
  htmlElements,
  store,
  currentProvider,
  serverProvider,
  localProvider,
  styleSetter
);

const inputs = [
  { element: htmlElements.pushButton, listener: pushButtonListener.click.bind(pushButtonListener) },
  { element: htmlElements.cancelButton, listener: cancelButtonListener.click.bind(cancelButtonListener) },
  { element: htmlElements.changeSource, listener: changeSourceListener.click.bind(changeSourceListener) }
];

// add listeners
inputs.forEach(input => input.element.onclick = input.listener);

// initialization
styleSetter.setBackgroundColor(htmlElements.body, store.styles.colors.green);
styleSetter.setLinkHref(htmlElements.configurationLink, store.styles.configurations.white);
