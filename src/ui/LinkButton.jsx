import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LinkButton.propTypes = {
    
};

function LinkButton({children, to}) {
    const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline'
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

export default LinkButton;