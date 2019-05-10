const ALLOWED_CHAR_REGEX = /^$|^[bmk0-9.]+$/i;
const TRAILING_MODIFIER__REGEX = /^$|^[0-9.]+(b|m|k)?$/i;

export const ALLOWED_CHAR_ERROR =
  "Only numbers, decimal points, and the modifiers 'b', 'k', and 'm' are allowed";
export const GREATER_THAN_ERROR =
  'Value must be greater than or equal to minimum';
export const LESS_THAN_ERROR = 'Value must be less than or equal to maximum';
export const TRAILING_MODIFIER_ERROR =
  "Modifiers 'k', 'm', and 'z' must follow numbers";

/**
 * @function allowedCharacters
 * @description returns an error if the value contains forbidden characters
 * @export
 * @param {String} value
 * @returns {String} The error associated with the function
 */
export function allowedCharacters(value) {
  return ALLOWED_CHAR_REGEX.test(value) ? null : ALLOWED_CHAR_ERROR;
}

/**
 * @function trailingModifier
 * @description returns an error if the value contains trailing modifier characters
 * that are formatted incorrectly
 * @export
 * @param {String} value
 * @returns {String} The error associated with the function
 */
export function trailingModifier(value) {
  return TRAILING_MODIFIER__REGEX.test(value) ? null : TRAILING_MODIFIER_ERROR;
}

/**
 * @function isGreaterThan
 * @description Compares two values and returns an error if the target is not
 * greater than the comparator
 * @export
 * @param {String} target
 * @param {String} comparator
 * @returns {String} The error associated with the function
 */
export function isGreaterThan(target, comparator) {
  return Number(target) >= Number(comparator) ? null : GREATER_THAN_ERROR;
}

/**
 * @function isLessThan
 * @description Compares two values and returns an error if the target is not
 * less than the comparator
 * @export
 * @param {String} target
 * @param {String} comparator
 * @returns {String} The error associated with the function
 */
export function isLessThan(target, comparator) {
  return Number(target) <= Number(comparator) ? null : LESS_THAN_ERROR;
}
