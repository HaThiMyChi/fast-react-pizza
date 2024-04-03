import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

UserName.propTypes = {
    
};

function UserName(props) {
    const username = useSelector((state) => state.user.username);
    
    if (!username) return null;
    return (
        <div className='hidden text-sm font-semibold md:block'>
            {username}
        </div>
    );
}

export default UserName;