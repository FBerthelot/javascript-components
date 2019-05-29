import {capitalize} from './utils';

describe('capitalize', () => {
    it('should return a string with first letter to upperCase', () => {
        expect(capitalize('toto')).toBe('Toto');
    });

    it('should set the rest of the word to lowerCase', () => {
        expect(capitalize('TOTO')).toBe('Toto');
    });

    it('should return empty string when give empty string', () => {
        expect(capitalize('')).toBe('');
    });
});
