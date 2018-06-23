/**
 * Produces a custom normalizing function for phone numbers
 * @param {bool} allowExtension Whether the function should allow a trailing x ____
 * @returns {function} Returns the normalization function
 */

const defaultOptions = {
  allowExtension: true,
};

const normalizeCustomPhone = ({ allowExtension } = defaultOptions) => {
  const normalizePhone = (value, previousValue) => {
    if (!value) {
      return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    if (!previousValue || value.length > previousValue.length) {
      // typing forward
      if (onlyNums.length === 3) {
        return `(${onlyNums}`;
      }

      if (onlyNums.length === 6) {
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}-`;
      }
    }
    if (onlyNums.length <= 3) {
      return `(${onlyNums}`;
    }

    if (onlyNums.length <= 6) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
    }

    if (!allowExtension || onlyNums.length <= 10) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
    }

    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)} x ${onlyNums.slice(10, 16)}`;
  };

  return normalizePhone;
};

export default normalizeCustomPhone;
