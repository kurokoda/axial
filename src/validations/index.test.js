import {
  ALLOWED_CHAR_ERROR,
  GREATER_THAN_ERROR,
  LESS_THAN_ERROR,
  TRAILING_MODIFIER_ERROR,
  allowedCharacters,
  isGreaterThan,
  isLessThan,
  trailingModifier
} from './index.js';

describe('Validation', () => {
  describe('allowedCharacters', () => {
    it('Returns error on comma', () => {
      expect(allowedCharacters('1,000,000')).toEqual(ALLOWED_CHAR_ERROR);
    });
    it('Returns error on alpha', () => {
      expect(allowedCharacters('abc')).toEqual(ALLOWED_CHAR_ERROR);
    });
    it('Does not return error on allowed characters', () => {
      expect(allowedCharacters('100b')).toEqual(null);
    });
  });

  describe('isGreaterThan', () => {
    it('Returns error on false result', () => {
      expect(isGreaterThan('1000', '2000')).toEqual(GREATER_THAN_ERROR);
    });
    it('Does not return error on true result', () => {
      expect(isGreaterThan('2000', '1000')).toEqual(null);
    });
    it('Does not return error on equal result', () => {
      expect(isGreaterThan('2000', '2000')).toEqual(null);
    });
  });

  describe('isLessThan', () => {
    it('Returns error on false result', () => {
      expect(isLessThan('2000', '1000')).toEqual(LESS_THAN_ERROR);
    });
    it('Does not return error on true result', () => {
      expect(isLessThan('1000', '2000')).toEqual(null);
    });
    it('Does not return error on equal result', () => {
      expect(isLessThan('2000', '2000')).toEqual(null);
    });
  });

  describe('trailingModifier', () => {
    it('Returns error on correctly formatted but illegal modifier', () => {
      expect(trailingModifier('2000z')).toEqual(TRAILING_MODIFIER_ERROR);
    });

    it('Does not return error on "k" modifier', () => {
      expect(trailingModifier('2000k')).toEqual(null);
    });

    it('Does not return error on "m" modifier', () => {
      expect(trailingModifier('2000m')).toEqual(null);
    });

    it('Does not return error on "b" modifier', () => {
      expect(trailingModifier('2000b')).toEqual(null);
    });
  });
});
