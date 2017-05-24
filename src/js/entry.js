import '../sass/master.scss';
import phrase from './app';
import moment from 'moment';

const message = document.createElement('h1');
message.textContent = phrase;
const time = document.createElement('div');
time.textContent = moment().format();
const root = document.getElementById('root');

root.appendChild(message);
root.appendChild(time);
