# VRP coding challange
This project is a solution to coding challange. It provides a solution to a version of the Vehicle Routing Problem (VRP). The program assigns routes to drivers while minimizing the total cost. 
_____
# For the Evaluators
Thank you for taking the time to evaluate this submission. I have made some design decisions to focus on efficiency and scalability. 

1. Trade-offs and design choices
    - I used the [greedy heuristic algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) for route assignments because I thought it provides a practical balance between runtime performance and cost minimization. In my tests it seems like it performs well. 
    - Initally drawn to tree or graph data structrue and using DFS or BFS, I realized that they would be computationally expensive as the input size increased as low as 200 routes. It would be hard to meet the 30 second tuntime requirement.
2. Focus on evaluator criteria
    - I try to focus on each evaluation criteria, for example, Minimizing total cost. My first solution had completely ignored it but after reading it carefully I realized that it had been ignored. I prioritized the algorithm to minimizing the fixed cost, number of drivers, while ensuring total driven minutes.
    - The solution efficiently handles input sized up to the stated maximum of 200 loads. It completes well within the given time limits. 
    - As you will notice I have tried to use modularized code into seperate files with clear responsibilities so it is easier to review.
3. Some Limiatations
    - This solution does not explore some advanced clustering based optimization. 
    - The Greedy algorithm is efficient for this data size. it maybe lackluster for globally optimal solutions in some cases. 
4. With additional time, I would experiment with hybrid approches like clustering with greedy assignments. 

# Requirements
- Node.js v12 or later. (I have node-v12.11.0 installed)

# Installation
Clone the repo
```
git clone https://github.com/ajayrajyadav/vrp-coding-challange.git
cd vrp-coding-challange
```
# Usage
```
node src/main.js {path_to_problem_file}
```