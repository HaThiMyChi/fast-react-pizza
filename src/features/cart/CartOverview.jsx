import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

CartOverview.propTypes = {
    
};

function CartOverview(props) {
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const totalCartPrice = useSelector(getTotalCartPrice);

    if (!totalCartQuantity) return null;

    return (
        <div className='bg-stone-800 text-sm px-4 py-4 uppercase sm:px-6 md:text-base flex items-center justify-between text-stone-200'>
            <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6'>
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;