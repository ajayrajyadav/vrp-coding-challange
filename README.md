# VRP coding challange
This project is a solution to coding challange. It provides a solution to a version of the Vehicle Routing Problem (VRP). The program assigns routes to drivers while minimizing the total cost. 
_____
# For the Evaluators
Thank you for taking the time to evaluate this submission. I have made some design decisions to focus on efficiency and scalability. 

1. Trade-offs and design choices
    - I used the [greedy heuristic algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) for route assignments because I thought it provides a practical balance between runtime performance and cost minimization. In my tests it seems like it performs well. 
    - Initally drawn to tree or graph data structrue and using DFS or BFS, I realized that they would be computationally expensive as the input size increased as low as 200 routes. It would be hard to meet the 30 second tuntime requirement.