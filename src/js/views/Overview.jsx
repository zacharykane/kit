import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { headerTextStyles } from '../styles';

const Overview = props => {
    return (
        <section
            css={css`
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            `}
        >
            <h1 css={headerTextStyles}>Hello {props.name}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                nemo fugit quisquam tempora praesentium voluptatum cumque quod
                illo, vero reiciendis earum repudiandae quaerat quo similique
                ipsa omnis id suscipit magni?
            </p>
        </section>
    );
};

Overview.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Overview;
