import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleImages } from '../../app/redditSlice';
import './imageToggle.css';

const ImageToggle = () => {
    const dispatch = useDispatch();

    const onToggle = (e) => {
        e.preventDefault();
        dispatch(toggleImages());
    };

    return (
        <form className='form' onClick={onToggle}>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </form>
    );
};

export default ImageToggle; 