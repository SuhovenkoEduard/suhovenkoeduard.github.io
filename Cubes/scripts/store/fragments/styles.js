const configurations = {
  white: {
    border: 'medium solid black',
    background: 'white',
    color: 'black'
  },
  black: {
    border: 'medium solid white',
    background: 'black',
    color: 'white'
  }
};

const cancelButtons = {
  wait: { display: 'initial' },
  success: { display: 'none' },
  error: { display: 'none' },
  cancel: { display: 'none' }
};

const pushButtons = {
  wait: { display: 'none' },
  success: { display: 'initial' },
  error: { display: 'initial' },
  cancel: { display: 'initial' }
};

const states = {
  wait: { background: 'yellow' },
  success: { background: 'green' },
  error: { background: 'red' },
  cancel: { background: 'orange' }
};

const sourceLabels = {
  white: { color: 'black' },
  black: { color: 'red' }
};

const sourceLabelStrings = {
  white: 'True random is enabled.',
  black: 'True random is disabled.'
};

const styles = {
  configurations,
  states,
  sourceLabels,
  sourceLabelStrings,
  cancelButtons,
  pushButtons
};

export default styles;
