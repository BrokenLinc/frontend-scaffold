/**
 * Applies upperFirst to each word in the string, only if the word meets a minimum length
 * @param str The string of words separated by spaces
 * @param min The minimum word length to receive formatting
 * @returns {string}
 */
import { map, toLower, upperFirst } from 'lodash';

const startCaseGreaterThan = (str, min) => {
  const words = str.split(' ');
  return map(words, word => (word.length > min ? upperFirst(toLower(word)) : word)).join(' ');
};

export default startCaseGreaterThan;
