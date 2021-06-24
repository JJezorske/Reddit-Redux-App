import React from 'react';
import {  useSelector } from 'react-redux';
import {  selectSubreddit } from '../../app/redditSlice';
import './title.css';

function Title() {

    const subreddit = useSelector(selectSubreddit).toUpperCase();

    return (
        <div className="header">
            <h1>
                /r/ {subreddit}
            </h1>
        </div>
    )
};

export default Title;