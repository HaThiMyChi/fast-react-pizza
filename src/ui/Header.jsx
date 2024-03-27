import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';


Header.propTypes = {
    
};

function Header(props) {
    return (
        <header>
            <Link to="/">
                Fast React Pizza Co.
            </Link>

            <SearchOrder />
        </header>
    );
}

export default Header;