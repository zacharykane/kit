import '../sass/master.scss';
import createComponent from './createComponent';
import moment from 'moment';

const header = createComponent('h1', 'Article Title!');
const time = createComponent('div', moment().format('MMMM Do YYYY, h:mm:ss a'));
const message = createComponent(
    'p',
    'Etia dictum nisi a leo auctor gravida. Maecenas id augue a ex egestas fringilla sit amet nec nulla. Suspendisse potenti. Integer pretium non ligula non ultrices. Donec vel nulla laoreet justo pharetra efficitur. Ut eleifend placerat dolor sed interdum. Proin tortor justo, consectetur vel blandit ut, congue ut leo. In hac habitasse platea dictumst. Sed gravida erat augue, eu rutrum felis suscipit at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras mauris ligula, interdum eget mattis sit amet, blandit a enim. Donec dictum faucibus risus ac euismod.'
);
const root = document.getElementById('root');
root.appendChild(header);
root.appendChild(time);
root.appendChild(message);
