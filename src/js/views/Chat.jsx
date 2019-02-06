import React from 'react';

import { headerTextStyles } from '../styles';

const Chat = () => (
    <section
        css={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }}
    >
        <h1 css={headerTextStyles}>Chat</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nisi quibusdam cupiditate nihil, fugit sed facere odit, ipsa minima
            placeat tenetur voluptatum, consequuntur ut quo nobis quae
            perferendis ipsum voluptas.
        </p>
    </section>
);

export default Chat;
