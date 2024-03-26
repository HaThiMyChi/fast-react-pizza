import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import {Outlet} from 'react-router-dom';

AppLayout.propTypes = {
    
};

function AppLayout(props) {
    return (
        <div>
            <Header />

            <main>
                {/* <h1>Content</h1> */}
                <Outlet />
            </main>

            <CartOverview />
        </div>
    );
}

export default AppLayout;