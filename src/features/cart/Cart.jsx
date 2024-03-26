import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../ui/LinkButton';

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <LinkButton to="/menu">
            &larr; Back to menu
        </LinkButton>
    );
}

export default Cart;