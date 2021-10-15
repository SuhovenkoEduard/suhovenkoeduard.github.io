export const ids = {
  configurations: 'configurationLink',
  states: 'stateLink',
  sourceLabels: 'sourceLabelLink'
};

const paths = {
  configurations: 'styles/result/configurations/',
  states: 'styles/result/states/',
  sourceLabels: 'styles/connection/states/'
};

function createLink(linkInfo, filename) {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = linkInfo.id;
  link.href = linkInfo.path + filename + '.css';
  return link;
}

const createLinkInfo = (id, path) => { return { id, path }; }

const linkInfos = {
  configuration: createLinkInfo(ids.configurations, paths.configurations),
  state:  createLinkInfo(ids.states, paths.states),
  sourceLabel: createLinkInfo(ids.sourceLabels, paths.sourceLabels)
};

const configurations = {
  white: createLink(linkInfos.configuration, 'white'),
  black: createLink(linkInfos.configuration, 'black')
};

const states = {
  wait: createLink(linkInfos.state, 'wait'),
  success: createLink(linkInfos.state, 'success'),
  error: createLink(linkInfos.state, 'error'),
  cancel: createLink(linkInfos.state, 'cancel')
};

const sourceLabels = {
  white: createLink(linkInfos.sourceLabel, 'white'),
  black: createLink(linkInfos.sourceLabel, 'black')
};

const links = {
  configurations,
  states,
  sourceLabels
};

export default links;