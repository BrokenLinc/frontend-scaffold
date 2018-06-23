export default {
  DISALLOWED_PASSWORD_CHARACTERS: /[^0-9a-zA-Z^$*.[\]{}()?\-"\\!@#%&/,><':;|_~`]/,
  ALLOWED_PASSWORD_SYMBOLS: /[\^$*.[\]{}()?\-"\\!@#%&/,><':;|_~`]/,
  // From AWS IAM Docs:
  // Names of users [...] must be alphanumeric, including the following common characters:
  // plus (+), equal (=), comma (,), period (.), at (@), underscore (_), and hyphen (-).
  // http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html
  DISALLOWED_USERNAME_SYMBOLS: /([^A-Za-z0-9+=,.@_-]|\s)/,
  VALID_EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9]{1}[A-Z0-9-]*$/i,
};
