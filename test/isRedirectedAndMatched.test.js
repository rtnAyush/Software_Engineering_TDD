const isRedirectedMatched = require('../src/controllers/isRedirectedMatched')

describe('isRedirectedMatched', () => {
    test('returns true for valid urls', async () => {
        expect(await isRedirectedMatched('http://localhost:3000/660e5643491693d792f2e8e2', "https://www.facebook.com/")).toBe(true);
    });

    test('returns false for invalid urls', async () => {
        expect(await isRedirectedMatched('http://localhost:3000/660e51b58f9fa587a55ddf9c', "https://example.com")).toBe(false);
    });
});
