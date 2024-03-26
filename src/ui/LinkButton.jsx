import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LinkButton.propTypes = {
    
};

function LinkButton({children, to}) {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
}

export default LinkButton;