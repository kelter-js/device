import { ModalControls } from './modal-control.js'
import { Constants } from './constants.js'

if (Constants.getModal()) {
  const modalControl = new ModalControls();
}
