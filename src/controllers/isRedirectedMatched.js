async function isRedirectedMatched(url, expectedUrl) {

    try {
        const res = await fetch(url, { method: 'GET' });

        if (res.redirected && res.url.includes(expectedUrl)) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

module.exports = isRedirectedMatched;