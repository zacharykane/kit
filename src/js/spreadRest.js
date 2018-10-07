export const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

export const obj2 = {
    ...obj1,
    key3: 'value3',
    key4: 'value4',
};

const values = Object.values(obj2);
const entries = Object.entries(obj2);

export { entries, values };
