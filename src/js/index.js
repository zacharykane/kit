import Bork from './class';
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

const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

const obj2 = {
    ...obj1,
    key3: 'value3',
    key4: 'value4',
};

const entries = Object.entries(obj2);

const frag = document.createDocumentFragment();
entries.forEach(entry =>
    frag.appendChild(createComponent('li', `${entry[0]}: ${entry[1]}`)),
);

render(createComponent('ul', frag));

let myBork = new Bork();

for (var n of fibonacci) {
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
    createComponent(
        'button',
        `Flip coin: ${myBork.boundFunction()}`,
        [{ name: 'style', value: 'display: block; margin: 1em' }],
        [
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
        ],
    ),
);
