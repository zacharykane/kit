import React from 'react';
import PropTypes from 'prop-types';

const Settings = props => {
    const changeName = e => {
        props.changeName(e.target.value);
    };

    return (
        <section
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <h1>Settings</h1>
            <input type="text" value={props.name} onChange={changeName} />
        </section>
    );
};

Settings.propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired,
};

export default Settings;
