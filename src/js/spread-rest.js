export const ob = {
    k: 'value',
};

export const obj = {
    ...ob,
    another: 'value',
    yet: 'more',
};

const values = Object.values(obj);
const entries = Object.entries(obj);

export { entries, values };
