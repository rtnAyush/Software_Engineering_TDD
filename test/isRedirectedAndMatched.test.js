const isRedirectedMatched = require('../src/controllers/isRedirectedMatched')

describe('isRedirectedMatched', () => {
    test('returns true for valid urls', async () => {
        expect(await isRedirectedMatched('https://www.urlshortener.com/abc', "https://www.google.com")).toBe(true);
        expect(await isRedirectedMatched('https://www.google.com')).toBe(
            true
        );
    });

    test('returns false for invalid urls', async () => {
        expect(await isRedirectedMatched('')).toBe(false);
        expect(await isRedirectedMatched('www.example.com')).toBe(false);
        expect(await isRedirectedMatched('example.com')).toBe(false);
        // expect(await isRedirectedMatched('http://example.com')).toBe(false);
        expect(await isRedirectedMatched('https://exml.com')).toBe(false);
    });
});
