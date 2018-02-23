import entry from './entry';

entry();

if (module.hot) {
    module.hot.accept('./entry', () => {
        document.getElementById('root').empty();
        entry();
    });
}
