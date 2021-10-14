import LocalProvider from "./fragments/local.js";
import ServerProvider from "./fragments/server.js";

const providers = {
  local: LocalProvider,
  server: ServerProvider
};

export default providers;