

async function isDuplicate(originalURL) {

    // Check if the URL exists in the database
    try {
        if (!originalURL) {
            return false;
        }

        const res = await fetch("http://localhost:3000/check-duplicate?originalURL=" + originalURL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }

        });
        // console.log(res.ok);
        if (!res.ok) {
            return false;
        }
        return true;

    } catch (error) {
        return false;
    }
}

module.exports = isDuplicate;