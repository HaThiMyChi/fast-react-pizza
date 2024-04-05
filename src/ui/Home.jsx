import React from 'react';
import PropTypes from 'prop-types';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { useSelector } from 'react-redux';

Home.propTypes = {
    
};

function Home(props) {
    const username = useSelector((state) => state.user.username)
    return (
        <div className='my-10 px-4 text-center sm:my-16'>
            <h1 className="text-xl font-semibold text-stone-700 mb-8 md:text-3xl">The best pizza.
                <br/>
                <span className='text-yellow-500'>
                    Straight out of the oven, straight to you
                </span>
            </h1>

            {username === '' ? (
                 <CreateUser />
            ) : (
                <Button to="/menu" type="primary">
                    Continue ordering, {username}
                </Button>
            )}
           
        </div>
    );
}

export default Home;