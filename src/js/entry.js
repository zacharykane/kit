import moment from 'moment';

import '../sass/master.scss';
import createComponent from './createComponent';

const header = createComponent('h1', 'Article Title!');
const time = createComponent('div', moment().format('MMMM Do YYYY, h:mm:ss a'));
const message = createComponent(
    'p',
    'Etia dictum nisi a leo auctor gravida. Maecenas id augue a ex egestas fringilla sit amet nec nulla. Suspendisse potenti. Integer pretium non ligula non ultrices. Donec vel nulla laoreet justo pharetra efficitur. Ut eleifend placerat dolor sed interdum. Proin tortor justo, consectetur vel blandit ut, congue ut leo. In hac habitasse platea dictumst. Sed gravida erat augue, eu rutrum felis suscipit at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras mauris ligula, interdum eget mattis sit amet, blandit a enim. Donec dictum faucibus risus ac euismod.',
);

const root = document.getElementById('root');
root.appendChild(header);
root.appendChild(time);
root.appendChild(message);

const ob = {
    k: 'value',
};

const obj = {
    ...ob,
    another: 'value',
    yet: 'more',
};

async function future() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const isHeads = Boolean(Math.round(Math.random()));

    if (isHeads) {
        return 'heads';
    }

    throw Error('tails');
}

async function foo() {
    try {
        return await future();
    } catch (e) {
        root.appendChild(createComponent('p', e.message));
    }
}

foo();

root.appendChild(createComponent('p', obj.k));
