const createComponent = (tag, content) => {
    const element = document.createElement(tag);
    element.innerHTML = content;

    return element;
};

module.exports = createComponent;
