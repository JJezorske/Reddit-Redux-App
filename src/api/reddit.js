export const RootUrl = 'https://www.reddit.com/r/';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(RootUrl + subreddit + '/.json');
    const json = await response.json();

    return json.data.children
}