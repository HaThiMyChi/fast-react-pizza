import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../ui/LinkButton';
import { Link } from 'react-router-dom';

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <div>
            <Link className="text-sm text-blue-500 hover:text-blue-500 hover:underline" to="/menu">
                &larr; Back to menu
            </Link>

            <h2 className='mt-7 text-xl font-semibold'>Your cart, %NAME%</h2>

            <div className='mt-6 space-x-2'>
                <Link to="/order/new">Order pizzas</Link>
                <button>Clear cart</button>
            </div>
        </div>
        

    );
}

export default Cart;