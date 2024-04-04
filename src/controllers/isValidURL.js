async function isValidURL(url) {
    const urlRegex = /^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[\w.-]*)*\/?$/;
    const isValidFormat = urlRegex.test(url);
    
    try {
        const res = await fetch(url);
        if (isValidFormat && res.ok) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

module.exports = isValidURL;
