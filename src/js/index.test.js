import test from 'tape';

import Bork from './class';

test('class test', t => {
    t.plan(3);

    const myBork = new Bork();

    //Property initializers are not on the prototype.
    t.equal(myBork.__proto__.boundFunction, undefined);

    //Bound functions are bound to the class instance.
    t.equal(myBork.boundFunction.call(undefined), 'bork');

    //Static function exists on the class.
    t.equal(Bork.staticFunction(), 'babelIsCool');
});
