const isDuplicate = require('../src/controllers/checkDuplicate.js');

describe('isDuplicate', () => {
    test('returns true for valid urls', async () => {
        expect(await isDuplicate('https://www.facebook.com')).toBe(true);
    });

    test('returns false for invalid urls', async () => {
        expect(await isDuplicate('')).toBe(false);
        expect(await isDuplicate('www.example.com')).toBe(false);
        expect(await isDuplicate('example.com')).toBe(false);
        expect(await isDuplicate('https://exml.com')).toBe(false);
    });
});
