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

const styles = {
  configurations,
  states,
  sourceLabels
};

export default styles;
