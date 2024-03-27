import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

SearchOrder.propTypes = {
    
};

function SearchOrder(props) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        // Phương thức preventDefault() của đối tượng event được sử dụng để ngăn chặn cách xử lý mặc định của trình duyệt khi xảy ra sự kiện.
        e.preventDefault();

        if(!query) return;
        navigate(`/order/${query}`);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Search order #'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
        </form>
    );
}

export default SearchOrder;