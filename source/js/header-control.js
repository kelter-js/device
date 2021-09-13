import { VisibleControls } from './visible-control.js'


class HeaderControl extends VisibleControls {

  constructor (triggers, visibleClass, parentClass) {
    super(...arguments);

    document.addEventListener('click', this._openVisible);
  }

  _openVisible (e) {
    const visible = this._visibles.get(e.target);

    if (!visible) {
      return;
    }

    if (this._currentVisibleElements.length > 0) {
      super._clearVisibles();
      return;
    }

    super._openVisible([...this._visibles.values()]);
  }
}

export { HeaderControl }
