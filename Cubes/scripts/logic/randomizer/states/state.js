class State {
  name = 'state';

  constructor(randomizer) {
    this.randomizer = randomizer;
  }

  changeResult(randoms) { }

  showError(error) { }

  clickPush(event) { }

  clickChange(event) { event.preventDefault(); }

  clickCancel(event) { }

  getName() {
    return this.name;
  }
}

export default State;