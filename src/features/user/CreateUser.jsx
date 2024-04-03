import React, { useState } from 'react';
import PropTypes from 'prop-types';

CreateUser.propTypes = {
    
};

function CreateUser(props) {
    const [username, setUsername] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();

        if (!username) return;
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

            <input 
                type="text"  
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='input mb-8 w-72'
            />
            
            {username !== '' && (
                <div>
                    <button>Start ordering</button>
                </div>
            )}
            
        </form>
    );
}

export default CreateUser;