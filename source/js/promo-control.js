import { VisibleControls } from './visible-control.js'


class PromoControl extends VisibleControls {
  #timer;
  #timeout;

  constructor (triggers, visibleClass, parentClass) {
    super(...arguments);

    document.addEventListener('click', this._openVisible);
    this._changeElements = this._changeElements.bind(this);

    this.#timer = null;
    this.#timeout = 3500;

    this._currentVisibleElements = [
      this._visibleElements[0],
      this._openElements[0],
    ];

    this._onStart();
  }

  _changeElements () {
    const currentVisibleButton = this._currentVisibleElements.filter(item => item.classList.contains('promo__carousel-button'))[0];
    let currentIndex = this._openElements.indexOf(currentVisibleButton);

    if (currentIndex >= this._openElements.length - 1) {
      currentIndex = -1;
    }

    const nextElements = [
      this._openElements[currentIndex + 1],
      this._visibleElements[currentIndex + 1],
    ];

    super._clearVisibles();
    super._openVisible(nextElements);
  }

  _onStart () {
    this.#timer = setInterval(this._changeElements, this.#timeout);
  }

  _openVisible (e) {
    const target = e.target;
    const visible = this._visibles.get(target);

    clearInterval(this.#timer);
    this.#timer = null;

    if (!visible) {
      return;
    }

    super._clearVisibles();
    super._openVisible([visible, target]);
    this._onStart();
  }
}

export { PromoControl }
