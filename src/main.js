function main() {
    // Retrieve command-line arguments
    const args = process.argv;

    // Check for correct usage
    if (args.length !== 3) {
        console.error("Usage: node src/main.js {path_to_problem_file}");
        return; // Exit program
    }

    const filePath = args[2]; // Input file path

    
}

main();