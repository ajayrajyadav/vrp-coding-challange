const { parseInput } = require('./utils');
const { assignLoads } = require('./algorithms');

// Entry point of the program
// Parses input, runs the algorithm, and prints the result
function main() {
    // Retrieve command-line arguments
    const args = process.argv;

    // Check for correct usage
    if (args.length !== 3) {
        console.error("Usage: node src/main.js {path_to_problem_file}");
        return; // Exit program
    }

    const filePath = args[2]; // Input file path

    try {
        // Parse input data
        const loads = parseInput(filePath);

        // Assign loads to drivers
        const { drivers, totalCost } = assignLoads(loads);

        // Print results
        console.log("Driver Assignments:");
        drivers.forEach((route, index) => {
            console.log(`${JSON.stringify(route)}`);
        });
    } catch (err) {
        // Catch any errors during execution
        console.error("An error occurred:", err.message);
    }
}

main();