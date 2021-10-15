// data imports
import store from "./scripts/store/store.js";

// logic imports
import providers from "./scripts/logic/providers/providers.js";
import ui from "./scripts/logic/ui/ui.js";

// randomizer
import Randomizer from "./scripts/logic/Randomizer/randomizer.js";

// store providers
const providerInstances = {
  local: new providers.server(store.random),
  external: new providers.local(store.params.timeout)
};

const randomizer = new Randomizer(ui, store, providerInstances);

ui.pushButton.onclick = randomizer.clickPush.bind(randomizer);
ui.changeButton.onclick = randomizer.clickChange.bind(randomizer);
ui.cancelButton.onclick = randomizer.clickCancel.bind(randomizer);