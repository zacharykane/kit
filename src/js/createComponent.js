function createComponent(tag, content, attributes, properties) {
    const element = document.createElement(tag);

    attributes &&
        attributes.forEach((attr) => {
            element.setAttribute(attr.name, attr.value);
        });

    properties &&
        properties.forEach((prop) => {
            element[prop.name] = prop.value;
        });

    if (typeof content !== 'object') {
        element.appendChild(document.createTextNode(content));
    } else {
        element.appendChild(content);
    }

    return element;
}

export { createComponent };
