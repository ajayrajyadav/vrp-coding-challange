const fs = require('fs');

// Function to calculate Euclidean distance between two points
// Simple distance formula based on Cartesian coordinates
function euclideanDistance(point1, point2) {
    const [x1, y1] = point1; // Deconstruct point1
    const [x2, y2] = point2; // Deconstruct point2
    // Use the distance formula
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to parse input file and extract load data
// Each load has an ID, pickup location, and dropoff location
function parseInput(filePath) {
    try {
        // Read file content as a string
        const data = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
        const loads = [];
        for (let i = 1; i < data.length; i++) {
            // Skip the header (assuming first line is a header)
            const [id, pickup, dropoff] = data[i].trim().split(/\s+/); // Split line by spaces
            const load = {
                id: parseInt(id), // Convert ID to integer
                pickup: pickup.slice(1, -1).split(',').map(Number), // Remove parentheses and split
                dropoff: dropoff.slice(1, -1).split(',').map(Number) // Same for dropoff
            };
            loads.push(load); // Add parsed load to the list
        }
        return loads; // Return all parsed loads
    } catch (err) {
        // Catch and log errors (e.g., file not found)
        console.error("Error reading or parsing input file:", err.message);
        throw err; // Re-throw to ensure program stops
    }
}

module.exports = { euclideanDistance, parseInput };