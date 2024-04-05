import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../ui/LinkButton';

EmptyCart.propTypes = {
    
};

function EmptyCart(props) {
    return (
        <div className='px-4 py-3'>
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <p className='mt-7 font-semibold'>
                Your cart is still  empty. Start adding some pizzas :)
            </p>
        </div>
    );
}

export default EmptyCart;