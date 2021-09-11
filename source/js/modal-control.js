class ModalControls {
  #openElements;
  #closeButtons;
  #visibleClass;
  #modalClass;
  #currentModal;
  #modals;

  constructor () {
    this.#openElements = [
      document.querySelector('.contacts__send-message-button'),
      document.querySelector('.contacts__map-image'),
    ];

    this.#modals = new Map();
    this.#modals.set(this.#openElements[0], document.querySelector('.modal--contact-us'));
    this.#modals.set(this.#openElements[1], document.querySelector('.modal--map'));

    this.#closeButtons = [...document.querySelectorAll('.modal__close-button')];
    this.#visibleClass = 'modal--visible';
    this.#modalClass = '.modal';
    this.#currentModal = null;

    this._closeModals = this._closeModals.bind(this);
    this._openModal = this._openModal.bind(this);
    this._keyHandler = this._keyHandler.bind(this);
    this._setHandlers(this.#closeButtons, this._closeModals);
    document.addEventListener('click', this._openModal);
    document.addEventListener('keydown', this._keyHandler);
  }

  _keyHandler (e) {
    if (this.#currentModal) {
      this._removeVisibleClass(this.#currentModal);
      this.#currentModal = null;
    }
  }

  _removeVisibleClass (element) {
    element.classList.remove(this.#visibleClass);
  }

  _openModal (e) {
    const target = e.target;
    const modal = this.#modals.get(target);

    if (this.#currentModal && !target.closest(this.#modalClass)) {
      this._removeVisibleClass(this.#currentModal);
      this.#currentModal = null;
    }

    if (!modal) {
      return;
    }

    modal.classList.add(this.#visibleClass);
    this.#currentModal = modal;
  }

  _setHandlers (elements, handler) {
    elements.forEach((element) => element.addEventListener('click', handler));
  }

  _closeModals (e) {
    const modal = e.target.closest(this.#modalClass);
    this._removeVisibleClass(modal);
    this.#currentModal = null;
  }
}

export { ModalControls }
