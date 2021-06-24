import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleImages, selectImageToggle } from '../../app/redditSlice';
import './imageToggle.css';

const ImageToggle = () => {
    const dispatch = useDispatch();
    const imageToggle = useSelector(selectImageToggle);

    const onToggle = (e) => {
        e.preventDefault();
        dispatch(toggleImages());
    };
    if (imageToggle === false) {
        return (
            <form className='toggleForm'>
                <label className="toggle">
                    <button type="submit"  onClick={onToggle}> 
                        Click To Show Image Posts Only
                    </button>
                </label>
            </form>
        );
    };
    if (imageToggle === true) {
        return (
            <form className='toggleForm'>
                <label className="toggle">
                    <button type="submit"  onClick={onToggle}> 
                        Click To Show All Posts
                    </button>
                </label>
            </form>
        );
    };
};

export default ImageToggle; 