import test from 'tape';
import { JSDOM } from 'jsdom';
const { document } = new JSDOM('').window;
global.document = document;

import createComponent from './createComponent';

test('testing test', assert => {
    assert.plan(1);
    const element = createComponent('h1', 'Testing');
    assert.equal(element.innerHTML, 'Testing', 'element sets content correctly');
});
