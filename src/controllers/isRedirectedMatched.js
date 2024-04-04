async function isRedirectedMatched(url, expectedUrl) {

    try {
        const res = await fetch(url);
        if (res.status === 301 && res.url === expectedUrl) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

module.exports = isRedirectedMatched;