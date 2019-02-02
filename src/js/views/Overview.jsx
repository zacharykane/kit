import React from 'react';
import PropTypes from 'prop-types';

const Overview = props => {
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
            <h1>Hello {props.name}</h1>
        </section>
    );
};

Overview.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Overview;
