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

    const isLoading = navigation.state === "loading";

    return (
        <div className="grid
            grid-row[auto_1fr_auto h-screen]"
        >
            {isLoading && (<Loader />)}
            <Header />

            <div className='my-10 overflow-scroll' >
                <main className='mx-auto max-w-3x'>
                    {/* <h1>Content</h1> */}
                    <Outlet />
                </main>
            </div>
           

            <CartOverview />
        </div>
    );
}

export default AppLayout;