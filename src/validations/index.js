export const ALLOWED_CHAR_ERROR =
  "Only numbers, decimal points, and the modifiers 'b', 'k', and 'm' are allowed";
export const GREATER_THAN_ERROR =
  'Value must be greater than or equal to minimum';
export const LESS_THAN_ERROR = 'Value must be less than or equal to minimum';
export const TRAILING_MODIFIER_ERROR =
  "Modifiers 'k', 'm', and 'z' must follow numbers";

const ALLOWED_CHAR_REGEX = /^$|^[bmk0-9.]+$/i;
const TRAILING_MODIFIER__REGEX = /^$|^[0-9.]+(b|m|k)?$/i;

export function allowedCharacters(value) {
  return ALLOWED_CHAR_REGEX.test(value) ? null : ALLOWED_CHAR_ERROR;
}

export function trailingModifier(value) {
  return TRAILING_MODIFIER__REGEX.test(value) ? null : TRAILING_MODIFIER_ERROR;
}

export function isGreaterThan(target, comparator) {
  return Number(target) >= Number(comparator) ? null : GREATER_THAN_ERROR;
}

export function isLessThan(target, comparator) {
  return Number(target) <= Number(comparator) ? null : LESS_THAN_ERROR;
}
