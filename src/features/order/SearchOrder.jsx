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
                onChange={(e) => setQuery(e.target.value)}
                className='w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 sm:focus:w-72 sm:w-64 transition-all duration-300
                    focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50' />
        </form>
    );
}

export default SearchOrder;