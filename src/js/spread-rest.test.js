import test from 'tape';

import { ob, obj, values, entries } from './spread-rest';

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
    assert.deepEqual(ob, { k: 'value' }, 'Object.entries() works');
    assert.deepEqual(
        obj,
        { k: 'value', another: 'value', yet: 'more' },
        'Object.entries() works',
    );
    assert.end();
});
