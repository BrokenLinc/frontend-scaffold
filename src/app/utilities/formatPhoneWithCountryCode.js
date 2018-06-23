/**
 * Formats the phone to display with dots and includes country code
 * @param phone The phone number, in any format or additional characters
 * @param countryCode The country code to add to the phone if it isn't there
 * @returns {string}
 */
const formatPhoneWithCountryCode = (phone, countryCode = 1) => {
  const numbersOnly = phone.replace(/\D+/g, '');
  const adjustedNumbersOnly = numbersOnly.length === 10 ? countryCode + numbersOnly : numbersOnly;
  const regexMatches = adjustedNumbersOnly.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  return !regexMatches ? phone : `${regexMatches[1]}.${regexMatches[2]}.${regexMatches[3]}.${regexMatches[4]}`;
};

export default formatPhoneWithCountryCode;
