import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

CartOverview.propTypes = {
    
};

function CartOverview(props) {
    return (
        <div className='bg-stone-800 text-sm px-4 py-4 uppercase sm:px-6 md:text-base flex items-center justify-between text-stone-200'>
            <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6'>
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;