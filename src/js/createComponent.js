const createComponent = (tag, content, attributes, properties) => {
    const element = document.createElement(tag);

    attributes &&
        attributes.forEach(attr => {
            element.setAttribute(attr.name, attr.value);
        });

    properties &&
        properties.forEach(prop => {
            element[prop.name] = prop.value;
        });

    element.innerHTML = content;

    return element;
};

export default createComponent;
