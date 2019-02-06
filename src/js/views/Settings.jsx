import React from 'react';
import PropTypes from 'prop-types';

import { headerTextStyles, contentTextStyles } from '../styles';

const Settings = props => {
    const changeName = e => {
        props.changeName(e.target.value);
    };

    return (
        <section
            css={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <h1 css={headerTextStyles}>Settings</h1>
            <input
                css={contentTextStyles}
                type="text"
                value={props.name}
                onChange={changeName}
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt ut ex aut voluptates tempore fuga omnis reprehenderit
                temporibus praesentium molestias perferendis sequi, placeat
                magnam rerum repellendus dolor consequatur totam doloremque.
            </p>
        </section>
    );
};

Settings.propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired,
};

export default Settings;
