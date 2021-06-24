import React from 'react';
import Thumbnail from '../../components/thumbnails';
import './articles.css';



function Article(props) {

    const percentage = props.article.upvote_ratio *100;
    var ratio = percentage => {
        if (percentage > 50) {
            return 'green'
        } else {
            return 'red'
        }
    };
    const thumb = props.article.thumbnail;

        return (
            <article className="articles">
                <a href={"https://www.reddit.com/" + props.article.permalink} target="_blank" rel="noreferrer">
                    <h3>{props.article.title}</h3>
                    <Thumbnail src={thumb} alt={props.article.title} />
                </a>
                <p className={ratio(percentage)}>{percentage}% upvoted</p>
            </article>
        )

    
};

export default Article;