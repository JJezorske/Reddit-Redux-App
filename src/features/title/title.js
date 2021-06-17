import React from 'react';
import {  useSelector } from 'react-redux';
import {  selectSubreddit } from '../../app/redditSlice';

function Title() {

    const subreddit = useSelector(selectSubreddit).toUpperCase();

    return (
        <h1>
             /r/ {subreddit}
        </h1>
    )
};

export default Title;