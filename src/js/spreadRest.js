let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

let n = { x, y, ...z };

export { x, y, z, n };
