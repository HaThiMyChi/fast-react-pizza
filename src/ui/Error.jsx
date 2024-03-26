import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useRouteError } from 'react-router-dom';

Error.propTypes = {
    
};

function Error(props) {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default Error;