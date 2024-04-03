const isValidURL = require('../src/controllers/isValidURL')

describe('isValidURL', () => {
    test('returns true for valid urls', async () => {
        expect(await isValidURL('https://www.google.com')).toBe(true);
        expect(await isValidURL('https://www.google.com')).toBe(
            true
        );
    });

    test('returns false for invalid urls', async () => {
        expect(await isValidURL('')).toBe(false);
        expect(await isValidURL('www.example.com')).toBe(false);
    });
});
