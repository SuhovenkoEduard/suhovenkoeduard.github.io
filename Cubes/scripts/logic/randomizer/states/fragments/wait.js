import State from "../state.js";
import states from "../states.js";

class Wait extends State {
  name = 'wait';

  constructor(randomizer) {
    super(randomizer);
  }

  changeResult(randoms) {
    this.randomizer.changeResult(randoms);
  }

  showError(error) {
    this.randomizer.changeState(new states.Error(this.randomizer));
  }

  clickCancel(event) {
    this.randomizer.changeState(new states.Cancel(this.randomizer));
  }
}


export default Wait;