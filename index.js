// index.js or your implementation file
function superbowlWin(record) {
    // Find the first record with a result of "W"
    const winRecord = record.find(game => game.result === "W");

    // Return the year of the win, or undefined if no win is found
    return winRecord ? winRecord.year : undefined;
}

// Export the function for use in other files
module.exports = superbowlWin;

