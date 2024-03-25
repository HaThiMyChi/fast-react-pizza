import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

AppLayout.propTypes = {
    
};

function AppLayout(props) {
    return (
        <div>
            <Header />

            <main>
                <h1>Content</h1>
            </main>

            <CartOverview />
        </div>
    );
}

export default AppLayout;