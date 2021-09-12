import { VisibleControls } from './visible-control.js'

class ModalControls extends VisibleControls {
  _closeButtons;
  _modalClass;

  constructor (triggers, visibleClass, enableElements, closeButtons, modalClass) {
    super(...arguments);

    this._closeButtons = closeButtons;
    this._modalClass = modalClass;

    this._keyHandler = this._keyHandler.bind(this);

    document.addEventListener('click', this._openVisible);
    document.addEventListener('keydown', this._keyHandler);
    this._setHandlers(this._closeButtons, this._clearVisibles);
  }

  _closeCurrentVisible (target) {
    if (this._currentVisibleElements.length > 0 && !target.closest(this._modalClass)) {
      super._clearVisibles();
    }
  }

  _keyHandler (e) {
    if (e.key === 'Escape' && this._currentVisibleElements.length > 0) {
      super._clearVisibles();
    }
  }

  _openVisible (e) {
    const target = e.target;
    const modal = this._visibles.get(target);

    this._closeCurrentVisible(target);

    if (!modal) {
      return;
    }

    super._openVisible([modal]);
  }

  _setHandlers (elements, handler) {
    elements.forEach((element) => element.addEventListener('click', handler));
  }
}

export { ModalControls }
