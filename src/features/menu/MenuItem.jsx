import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

MenuItem.propTypes = {
    pizza: PropTypes.object,
    
};

function MenuItem({pizza}) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl} = pizza;

    return (
        <li className='flex gap-4 py-2'>
            <img src={imageUrl} alt={name} />
            <div className='flex grow flex-col pt-0.5'>
                <p className='font-medium'>{name}</p>
                <p className='text-sm capitalize italic text-stone-500'>{ingredients.join(',')}</p>
                <div className='mt-auto flex items-center justify-between'>
                    {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium uppercase text-stone-500'>Sold out</p>}
                </div>
            </div>

        </li>
    );
}

export default MenuItem;