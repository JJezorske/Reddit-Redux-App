import { createSelector, createSlice } from '@reduxjs/toolkit';
import {getSubredditPosts} from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    searchTerm: '',
    subreddit: 'rabbits',
    imageOnlyToggle: false
};

const redditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
            state.error = false;
        },
        setPostsFail(state) {
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSubreddit(state, action) {
            state.subreddit = action.payload;
            state.searchTerm = '';
        },
        toggleImages(state) {
            state.imageOnlyToggle = !state.imageOnlyToggle ;
        }
    }
});

export const {
    setPosts,
    setSearchTerm,
    setSubreddit,
    setPostsFail,
    toggleImages
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        const posts = await getSubredditPosts(subreddit)
        dispatch(setPosts(posts));

    } catch(error) {
        dispatch(setPostsFail())
        console.log(error)
    }
};

export const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSubreddit = (state) => state.reddit.subreddit;
export const selectError = (state) => state.reddit.error;
export const selectImageToggle = (state) => state.reddit.imageOnlyToggle;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            return posts;
        }
    }
);