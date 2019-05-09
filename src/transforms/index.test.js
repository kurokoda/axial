import { trailingModifier } from './index.js';

describe('Transform', () => {
  describe('trailingModifier', () => {
    it('ignores value without any modifiers', () => {
      expect(trailingModifier('1000')).toEqual('1000');
    });
    it('converts value followed by "k" modifier to millions', () => {
      expect(trailingModifier('1k')).toEqual('1000');
    });
    it('converts value followed by "m" modifier to millions', () => {
      expect(trailingModifier('1m')).toEqual('1000000');
    });
    it('converts value followed by "m" modifier to millions', () => {
      expect(trailingModifier('5b')).toEqual('5000000000');
    });
  });
});
