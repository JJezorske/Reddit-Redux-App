import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubreddit} from '../../app/redditSlice';
import './searchForm.css';

const SearchForm = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(setSubreddit(searchTermLocal));
    };

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input type='text' placeholder='Search for different subreddit' value={searchTermLocal} onChange={onSearchTermChange} />
            <button 
                className= 'submit' type='submit' onClick={onFormSubmit}>Search
            </button>
        </form>
    );
};

export default SearchForm