import vanillatoasts from 'vanillatoasts';

import faCheck from 'app/icons/faCheck';
import faExclamationTriangle from 'app/icons/faExclamationTriangle';
import faExclamationCircle from 'app/icons/faExclamationCircle';

import imgSrcFromFaIcon from './imgSrcFromFaIcon';

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_ICON_COLOR = 'white';

// Handles an object OR a string
const smartToast = defaultProps => {
  return props => {
    const customProps = (typeof props === 'object') ? props : { text: props };
    const finalProps = Object.assign({}, defaultProps, customProps);
    vanillatoasts.create(finalProps);
    return finalProps;
  };
};

const toast = smartToast({
  timeout: DEFAULT_TIMEOUT,
});

const toastSuccess = smartToast({
  type: 'success has-icon',
  icon: imgSrcFromFaIcon(faCheck, DEFAULT_ICON_COLOR),
  timeout: DEFAULT_TIMEOUT,
});

const toastWarning = smartToast({
  type: 'warning has-icon',
  icon: imgSrcFromFaIcon(faExclamationTriangle, DEFAULT_ICON_COLOR),
  timeout: DEFAULT_TIMEOUT,
});

const toastError = smartToast({
  type: 'danger has-icon',
  icon: imgSrcFromFaIcon(faExclamationCircle, DEFAULT_ICON_COLOR),
  timeout: DEFAULT_TIMEOUT,
});
const toastDanger = toastError;

export {
  toast,
  toastSuccess,
  toastWarning,
  toastDanger,
  toastError,
};
