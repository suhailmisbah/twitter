import React from 'react'

import './assets/tweets.css';

import Avatar from '@material-ui/core/Avatar';


import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


function tweets(props) {
    return (
        <div className="tweets__Style">
            {/* Avatar -> username -> postedtime*/}
            <div className="tweetTop__style">
                <Avatar className="tweet__Avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h3>{props.username}</h3>
            </div>
            {/* caption */}
            <div className="post__Caption"><p>{props.caption}</p></div>
            {/* image */}
            <img className="post__image" src={props.imageurl} alt=""/>

            {/* comments -> retweets -> likes */}
            <div className="tweet__Action">
                <span><CommentIcon/> 5</span>

                <span><ShareIcon /> 4</span>
                <span><ThumbUpIcon /> 9</span>
            </div>
        </div>
    )
}

export default tweets
