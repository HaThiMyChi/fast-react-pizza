import React from 'react';
import PropTypes from 'prop-types';

import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';


Menu.propTypes = {
    
};

function Menu(props) {
    const menu = useLoaderData();
    console.log('menu', menu)

    return (
        <ul>
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