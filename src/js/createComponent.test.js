import test from 'tape';

import { createComponent } from './createComponent';

test('createComponent', assert => {
    const element = createComponent('h1', 'Testing');

    assert.equal(element.innerHTML, 'Testing', 'sets innerHMTL correctly');

    assert.end();
});
