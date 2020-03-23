import React from 'react'
const Header = ({titulo = 'Tienda virtual'}) => (
    <header>
        <h1>{titulo}</h1>
    </header>
);

export default Header;