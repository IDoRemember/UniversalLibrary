const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
// flatten([1,[2],3,4]) -> [1,2,3,4]
export default flatten;