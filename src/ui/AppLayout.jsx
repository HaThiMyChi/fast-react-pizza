import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import {Outlet, useNavigation} from 'react-router-dom';
import Loader from './Loader';

AppLayout.propTypes = {
    
};

function AppLayout(props) {
    const navigation = useNavigation();
    console.log('nav', navigation)

    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">
            {isLoading && (<Loader />)}
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