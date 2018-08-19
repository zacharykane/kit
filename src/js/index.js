/* eslint-disable */
import '../css/master.css';

import createComponent from './createComponent';
import AClass from './classes';
import { x, y, z, n } from './spreadRest';
import fibonacci from './iterators';
import generator from './generators';
import { future } from './asyncAwait';

let classInstance = new AClass('param');

document.body.appendChild(
    createComponent(
        'p',
        `Property initializers are not on the prototype. (undefined)
    ${classInstance.__proto__.boundFunction}`,
    ),
);
document.body.appendChild(
    createComponent(
        'p',
        `Bound functions are bound to the class instance. (bork)
    ${classInstance.boundFunction.call(undefined)}`,
    ),
);
document.body.appendChild(
    createComponent(
        'p',
        `Static function exists on the class. (babelIsCool)
    ${AClass.staticFunction()}`,
    ),
);
document.body.appendChild(
    createComponent('p', `getter ${classInstance.count}`),
);
classInstance.aType = 'new param';
document.body.appendChild(
    createComponent('p', `getter after setter ${classInstance.count}`),
);

document.body.appendChild(
    createComponent(
        'p',
        `rest properties (1) (2) ({ a: 3, b: 4 }) ${x} ${y} {
            a: ${z.a}, b: ${z.b}
        }`,
    ),
);

document.body.appendChild(
    createComponent(
        'p',
        `spread properties ({ x: 1, y: 2, a: 3, b: 4 }) {
            x: ${n.x}, y: ${n.y}, a: ${n.a}, b: ${n.b}
        }`,
    ),
);

for (var num of fibonacci) {
    if (num > 1000000) break;
    document.body.appendChild(
        createComponent('span', num, [
            { name: 'style', value: 'margin-right: 1em' },
        ]),
    );
}

const generate = generator();
const pull = generate.next();
document.body.appendChild(
    createComponent(
        'p',
        `Generator functions: pull.next() { value: ${pull.value},
        done: ${pull.done} }`,
    ),
);

document.body.appendChild(
    createComponent(
        'button',
        'Flip a Coin',
        [],
        [
            {
                name: 'onclick',
                value: async () => {
                    try {
                        const result = await future();
                        document.body.appendChild(createComponent('p', result));
                    } catch (error) {
                        document.body.appendChild(
                            createComponent('p', error.message),
                        );
                    }
                },
            },
        ],
    ),
);
