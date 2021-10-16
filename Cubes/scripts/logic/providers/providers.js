import LocalProvider from "./fragments/local.js";
import ServerProvider from "./fragments/server.js";

const providers = {
  Local: LocalProvider,
  Server: ServerProvider
};

export default providers;