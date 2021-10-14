import PushButtonListener from "./fragments/pushButtonListener.js";
import CancelButtonListener from "./fragments/cancelButtonListener.js";
import ChangeSourceListener from "./fragments/changeSourceListener.js";

const listeners = {
  Push: PushButtonListener,
  Cancel: CancelButtonListener,
  ChangeSource: ChangeSourceListener
};

export default listeners;