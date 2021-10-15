import State from "../state.js";
import states from "../states.js";

class Success extends State {
  name = 'success';

  constructor(randomizer) {
    super(randomizer);
  }

  changeResult(randoms) {
    // nothing
  }

  showError(error) {
    // nothing
  }

  clickPush(event) {
    this.randomizer.sendRequest();
    this.randomizer.changeState(new states.Wait(this.randomizer));
  }

  clickChange(event) {
    this.randomizer.updateProvider();
  }

  clickCancel(event) {
    // nothing
  }
}


export default Success;