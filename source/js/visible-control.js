class VisibleControls {
  _openElements;
  _visibleClass;
  _visibleElements;
  _currentVisibleElements;
  _visibles;

  constructor (triggers, visibleClass, enableElements) {
    this._openElements = triggers;

    this._visibles = new Map();

    this._visibleClass = visibleClass;
    this._visibleElements = enableElements;
    this._currentVisibleElements = [];
    this._openVisible = this._openVisible.bind(this);
    this._clearVisibles = this._clearVisibles.bind(this);

    this._setVisibleMethods();
  }

  _clearVisibles () {
    this._currentVisibleElements.forEach(visible => this._removeVisibleClass(visible));
    this._currentVisibleElements = [];
  }

  _setVisibleMethods () {
    this._visibleElements.forEach((visible, index) => {
      this._visibles.set(this._openElements[index], visible);
    })
  }

  _removeVisibleClass (element) {
    element.classList.remove(this._visibleClass);
  }

  _openVisible (visible) {
    visible.forEach(element => element.classList.add(this._visibleClass));
    this._currentVisibleElements.push(...visible);
  }
}

export { VisibleControls }
