class Constants {
  static getModal () {
    return document.querySelector('.modal');
  }

  static getModalTriggers () {
    return [
      document.querySelector('.contacts__map-image'),
      document.querySelector('.contacts__send-message-button'),
    ];
  }

  static getModalVisibleClass () {
    return 'modal--visible';
  }

  static getModalParentClass () {
    return [...document.querySelectorAll('.modal')];
  }

  static getModalCloseButtons () {
    return [...document.querySelectorAll('.modal__close-button')];
  }

  static getModalClass () {
    return '.modal';
  }

  static getService () {
    return document.querySelector('.service');
  }

  static getServiceTriggers () {
    return [...document.querySelectorAll('.service__button')];
  }

  static getServiceVisibleClass () {
    return 'enabled';
  }

  static getServiceParentClass () {
    return [...document.querySelectorAll('.service__wrapper')];
  }

  static getHeader () {
    return document.querySelector('.page-header');
  }

  static getHeaderTrigger () {
    return [document.querySelector('.page-header__catalog-button')];
  }

  static getHeaderVisibleClass () {
    return 'enabled';
  }

  static getHeaderParentClass () {
    return [
      document.querySelector('.page-header__wrapper'),
      document.querySelector('.catalog__list'),
    ]
  }
}

export { Constants }
