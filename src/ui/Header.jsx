import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


Header.propTypes = {
    
};

function Header(props) {
    return (
        <header>
            <Link to="/">
                Fast React Pizza Co.
            </Link>
        </header>
    );
}

export default Header;