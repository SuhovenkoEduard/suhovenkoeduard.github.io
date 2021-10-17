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
  wait: { visibility: 'visible' },
  success: { visibility: 'hidden' },
  error: { visibility: 'hidden' },
  cancel: { visibility: 'hidden' }
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
  cancelButtons
};

export default styles;
