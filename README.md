# Uncontrolled Infinite Loop in useEffect Hook

This repository demonstrates a common mistake when using the `useEffect` hook in React: omitting the dependency array, leading to an infinite loop.  The `bug.js` file shows the erroneous code, resulting in the `console.log` statement executing repeatedly.  The corrected version in `bugSolution.js` includes the dependency array to control when the effect runs.

**To reproduce:**
1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `npm start` to start the development server.
4. Observe the console output and see how the initial issue is corrected.

This example highlights the importance of understanding the functionality and usage of the `useEffect` hook's dependency array.