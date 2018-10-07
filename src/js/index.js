import Bork from './class';
import { entries, values } from './spreadRest';
import { future } from './asyncAwait';
import { createComponent } from './createComponent';

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

async function flip() {
    try {
        const result = await future();
        console.log(result);
        render(createComponent('p', result));
    } catch (error) {
        console.log(error.message);
        render(createComponent('p', error.message));
    }
}

flip();

render(
    createComponent('button', 'Flip coin', null, [
        {
            name: 'onclick',
            value: async () => {
                try {
                    const result = await future();
                    render(createComponent('p', result));
                } catch (error) {
                    render(createComponent('p', error.message));
                }
            },
        },
    ]),
);
