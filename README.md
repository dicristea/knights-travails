# Knights Travails

This code is a solution using the console to The Odin Project's <a href="https://www.theodinproject.com/lessons/javascript-knights-travails">Knights Travails Project</a>.

###FOCUS
Utilize graph data structures and appropriate search algorithms to create the shortest path for moving a knight piece on a chessboard.

## Notes

- Implemented using BFS on a graph and linked list traversal. DFS could result in an infinite series.

- Should use a more legitamate approach to the input array comparison than JSON.stringify. Used here for testing purposes only. Correct way would be to loop through each array's items.

- Set() is a standard built-in object in Javascript that can remove duplicate elements from an array.
  - See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#remove_duplicate_elements_from_the_array"> Set Mozilla docs</a>
