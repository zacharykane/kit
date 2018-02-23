import test from 'tape';

import { obj1, obj2, values, entries } from './spreadRest';

test('object values', assert => {
    assert.deepEqual(
        values,
        ['value', 'value', 'more'],
        'Object.values() works',
    );
    assert.end();
});

test('object entries', assert => {
    assert.deepEqual(
        entries,
        [['k', 'value'], ['another', 'value'], ['yet', 'more']],
        'Object.entries() works',
    );
    assert.end();
});

test('object entries', assert => {
    assert.deepEqual(obj1, { k: 'value' }, 'Object.entries() works');
    assert.deepEqual(
        obj2,
        { k: 'value', another: 'value', yet: 'more' },
        'Object.entries() works',
    );
    assert.end();
});
