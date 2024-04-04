const database = ["https://www.google.com"];

function isDuplicate(url) {
    // Check if the URL exists in the database
    return database.includes(url);
}

module.exports = isDuplicate;