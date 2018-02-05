export const obj1 = {
    k: 'value',
};

export const obj2 = {
    ...obj1,
    another: 'value',
    yet: 'more',
};

const values = Object.values(obj2);
const entries = Object.entries(obj2);

export { entries, values };
