/**
 * Normalizes a zip code to ensure the format of _____-____
 * @param {string} value The current zip code being entered in
 * @param {string} previousValue The previous value for the zip code
 * @returns {string} Returns the value, adding the elements of the recommended format
 */
const NormalizeZip = value => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 5) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 9)}`;
};

export default NormalizeZip;
