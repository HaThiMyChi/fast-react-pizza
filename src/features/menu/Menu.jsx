import React from 'react';
import PropTypes from 'prop-types';

import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';


Menu.propTypes = {
    
};

function Menu(props) {
    const menu = useLoaderData();

    return (
        <ul className='divide-y divide-stone-200 px-2 '>
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    );
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;