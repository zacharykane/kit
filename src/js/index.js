import Bork from './class';
import { entries, values } from './spreadRest';
import { future } from './asyncAwait';
import createComponent from './createComponent';
import generator from './generators';
import fibonacci from './iterators';

import '../css/master.css';

const root = document.getElementById('root');
function render(component) {
    root.appendChild(component);
}

render(createComponent('h1', 'Test'));

let myBork = new Bork();

const test = {
    ...myBork,
    additive: 'another',
};
console.log(test);

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"

console.log(entries, values);

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000) break;
    render(
        createComponent('span', n, [
            {
                name: 'style',
                value: 'margin-right: 20px',
            },
        ]),
    );
}

const iterator = generator();

render(
    createComponent('button', 'Flip coin', null, [
        {
            name: 'onclick',
            value: async () => {
                try {
                    const result = await future();
                    const pull = iterator.next();
                    render(
                        createComponent(
                            'p',
                            `Coin flip result: ${result},
                            Generator pull: ${pull.value} ${pull.done}`,
                        ),
                    );
                } catch (error) {
                    const pull = iterator.next();
                    render(
                        createComponent(
                            'p',
                            `Coin flip result: ${error.message},
                            Generator pull: ${pull.value} ${pull.done}`,
                        ),
                    );
                }
            },
        },
    ]),
);
