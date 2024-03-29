import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';


Header.propTypes = {
    
};

function Header(props) {
    return (
        <header className="border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6
            flex items-center justify-between">
            <Link to="/" className='tracking-widest'>
                Fast React Pizza Co.
            </Link>

            <SearchOrder />

            <UserName />

            {/* <p>Jonas</p> */}
        </header>
    );
}

export default Header;