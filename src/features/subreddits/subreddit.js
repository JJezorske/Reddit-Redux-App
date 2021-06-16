import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectSubreddit, selectPosts, selectError } from '../../app/redditSlice';
import Article from '../../components/articles/articles';

const Subreddit = (props) => {
    const subreddit = useSelector(selectSubreddit);
    const posts = useSelector(selectPosts);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    }, [subreddit]);

    if (error) {
        return (
            <h3>Sorry that subreddit does not exist, please search for another</h3>
        );
    }
    return (
        <div className='articles'>
         {
           ( posts !== null) ?  posts.map((post, index) => <Article key={index} article={post.data} />) : ''   
         }
        </div>
    );
}

export default Subreddit;