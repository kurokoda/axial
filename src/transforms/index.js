/**
 * @export
 * @description A method which transforms any of the allowed modifiers (k, m, b)
 * @function trailingModifier
 * to a string of the appropriate number of zeros
 * @param {*} value
 * @returns {String} the updated value
 */
export function trailingModifier(value) {
  const incomingValue = String(value).toLowerCase();
  if (incomingValue.indexOf('m') > -1) {
    return incomingValue.replace('m', '000000');
  } else if (incomingValue.indexOf('b') > -1) {
    return incomingValue.replace('b', '000000000');
  } else if (incomingValue.indexOf('k') > -1) {
    return incomingValue.replace('k', '000');
  }
  return incomingValue;
}
