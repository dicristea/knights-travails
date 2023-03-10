# Knights Travails

This code is a solution to The Odin Project's <a href="https://www.theodinproject.com/lessons/javascript-knights-travails">Knights Travails Project</a> as part of their Computer Science course.

Utilize graph data structures and appropriate search algorithms to create the shortest path for moving a knight piece on a chessboard.

### Notes

Implemented using BFS on an undirected graph. DFS could result in an infinite series.

Set() is a standard built-in object in Javascript that can remove duplicate elements from an array.
See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#remove_duplicate_elements_from_the_array"> Set Mozilla docs</a>

Array.sort()

- The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending.
- If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

<code>let sortedArray = [...new Set(array.sort((a, b) => a - b))];</code>
