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
