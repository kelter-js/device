import { ModalControls } from './modal-control.js'
import { ServiceControl } from './service-control.js'
import { HeaderControl } from './header-control.js'
import { PromoControl } from './promo-control.js'
import { Constants } from './constants.js'

if (Constants.getModal()) {
  const modalControl = new ModalControls(
    Constants.getModalTriggers(),
    Constants.getModalVisibleClass(),
    Constants.getModalParentClass(),
    Constants.getModalCloseButtons(),
    Constants.getModalClass()
  );
}

if (Constants.getService()) {
  const serviceControl = new ServiceControl(
    Constants.getServiceTriggers(),
    Constants.getServiceVisibleClass(),
    Constants.getServiceParentClass(),
  );
}

if (Constants.getHeader()) {
  const headerControl = new HeaderControl(
    Constants.getHeaderTrigger(),
    Constants.getHeaderVisibleClass(),
    Constants.getHeaderParentClass(),
  );
}

if (Constants.getPromo()) {
  const promoControl = new PromoControl(
    Constants.getPromoTriggers(),
    Constants.getPromoVisibleClass(),
    Constants.getPromoParentElements(),
  );
}
