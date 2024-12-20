const { euclideanDistance } = require('./utils');

const MAX_DRIVING_TIME = 720; // 12 hours (constant)

// Function to calculate time for a single load
function calculateLoadTime(load, currentLocation, depot) {
    const pickupTime = euclideanDistance(currentLocation, load.pickup);
    const dropoffTime = euclideanDistance(load.pickup, load.dropoff);
    const returnTime = euclideanDistance(load.dropoff, depot);
    return { pickupTime, dropoffTime, returnTime, total: pickupTime + dropoffTime + returnTime };
}

// Assign loads to a single driver
function assignRouteForDriver(loads, remainingLoads, depot) {
    let route = [];
    let currentLocation = depot;
    let totalTime = 0;

    // Continue assigning loads until no valid ones are left
    while (true) {
        let bestLoadIndex = null;
        let bestLoadTime = null;

        for (const loadIndex of remainingLoads) {
            const load = loads[loadIndex];
            const loadTime = calculateLoadTime(load, currentLocation, depot);

            // Feasibility check
            if (totalTime + loadTime.total <= MAX_DRIVING_TIME) {
                if (!bestLoadTime || loadTime.total < bestLoadTime.total) {
                    bestLoadIndex = loadIndex;
                    bestLoadTime = loadTime;
                }
            }
        }

        if (bestLoadIndex === null) break; // No more feasible loads

        // Assign load to route
        route.push(loads[bestLoadIndex].id);
        totalTime += bestLoadTime.pickupTime + bestLoadTime.dropoffTime;
        currentLocation = loads[bestLoadIndex].dropoff;
        remainingLoads.delete(bestLoadIndex);
    }

    return { route, totalTime };
}

// Main function to assign loads to multiple drivers
function assignLoads(loads) {
    const drivers = [];
    const depot = [0, 0];
    const remainingLoads = new Set(loads.map((_, index) => index));
    let totalMinutes = 0;

    while (remainingLoads.size > 0) {
        const { route, totalTime } = assignRouteForDriver(loads, remainingLoads, depot);
        drivers.push(route);
        totalMinutes += totalTime;
    }

    return {
        drivers,
        totalCost: 500 * drivers.length + totalMinutes
    };
}

module.exports = { assignLoads, MAX_DRIVING_TIME };