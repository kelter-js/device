import { VisibleControls } from './visible-control.js'


class ServiceControl extends VisibleControls {

  constructor (triggers, visibleClass, parentClass) {
    super(...arguments);

    document.addEventListener('click', this._openVisible);

    this._currentVisibleElements = [
      this._openElements[0].parentElement,
      document.querySelector('div.enabled'),
    ];
  }

  _openVisible (e) {
    const target = e.target;
    const visible = this._visibles.get(target);

    if (!visible) {
      return;
    }

    super._clearVisibles();
    super._openVisible([visible, target.parentElement]);
  }
}

export { ServiceControl }
