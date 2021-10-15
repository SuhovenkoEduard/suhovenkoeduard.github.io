class State {
  name = 'state';

  constructor(randomizer) {
    this.randomizer = randomizer;
  }

  changeResult(randoms) {
    State.throwNotImplementedException();
  }

  showError(error) {
    State.throwNotImplementedException();
  }

  clickPush(event) {
    State.throwNotImplementedException();
  }

  clickChange(event) {
    State.throwNotImplementedException();
  }

  clickCancel(event) {
    State.throwNotImplementedException();
  }

  getName() {
    return this.name;
  }

  static throwNotImplementedException() {
    throw new Error('Not implemented exception');
  }
}

export default State;