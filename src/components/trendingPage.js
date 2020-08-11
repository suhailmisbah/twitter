import React from 'react'

import Tweets from './tweets';

import './assets/explore.css';

function trendingPage() {
    return (
        <div>
             <div className="topNav__style">
                 <strong>Explore</strong>
            </div>
            <Tweets username="fashan" caption="abstract art" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-005.jpg"/>
            <Tweets username="asam"  caption="i am awsome" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-002.jpg"/>
            <Tweets username="catlover" caption="what a magnificent art" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-001.jpg"/>
            <Tweets username="artperson" caption="beautifull" imageurl="https://avante.biz/wp-content/uploads/Images-Of-Spring-Wallpapers/Images-Of-Spring-Wallpapers-001.jpg"/>
        </div>
    )
}

export default trendingPage
