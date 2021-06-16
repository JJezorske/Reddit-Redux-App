import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectSubreddit, selectPosts } from '../../app/redditSlice';
import Article from '../../components/articles/articles';

const Subreddit = (props) => {
    const subreddit = useSelector(selectSubreddit);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    }, [subreddit]);

    
    return (
        <div className='articles'>
         {
           ( posts !== null) ?  posts.map((post, index) => <Article key={index} article={post.data} />) : ''   
         }
        </div>
    );
}

export default Subreddit;