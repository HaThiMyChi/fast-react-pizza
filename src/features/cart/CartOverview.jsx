import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

CartOverview.propTypes = {
    
};

function CartOverview(props) {
    return (
        <div>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;