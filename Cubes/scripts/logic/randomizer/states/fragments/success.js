import State from "../state.js";
import states from "../states.js";

class Success extends State {
  name = 'success';

  constructor(randomizer) {
    super(randomizer);
  }

  clickPush(event) {
    this.randomizer.sendRequest();
    this.randomizer.changeState(new states.Wait(this.randomizer));
  }

  clickChange(event) {
    this.randomizer.updateProvider();
  }
}


export default Success;