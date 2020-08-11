import React, {useState, useEffect} from 'react'

import './assets/mainBody.css'

import { useDispatch } from 'react-redux';
import {insert} from './actions'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Tweets from './tweets';

function MainBody() {
    const [caption, setcaption] = useState(''); //caption
    const [imgUrl, setimgUrl] = useState(''); //image
    let [data, newposts] = useState([]); 
    const dispatch = useDispatch()  

    //getting database values
     useEffect(()=> {

        let localdata = localStorage.getItem('myData');
        if (localdata) {
        newposts(JSON.parse(localdata));
        }
        
     }, [caption])

     //console.log(data.caption)

     //inserting into database

    const setData = () => {
    
        dispatch(insert(caption, imgUrl))  //inserting to local storage
        
        setcaption("");
        setimgUrl("");
       
    }; 
       
    

    return (
        <div>
        <div className="mainBody__style">
            <div className="topNav__style">
                <strong>Home</strong>
            </div>
            <form >
           <div className="post__style">
               
            {/* user avatar */}
            <Avatar className="post__Avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
            {/* tweet box */}
            <TextField
                className="post__textField"
                placeholder="Whats happening?"
                onChange={event => setcaption(event.target.value)} 
                value={caption}
                multiline
            />
            </div>
            <div className="postImage__style">
            <TextField
                className="post__textField"
                id="standard-textarea"
                placeholder="Optional - Add a image url"
                onChange={event => setimgUrl(event.target.value)} 
                value={imgUrl}
                multiline
            />
            </div>
            <div className="postButton__style">
            <Button variant="outlined" className="tweet__buttonMain" fullWidth onClick={setData}>Tweet</Button>
            </div>
            </form>
        </div>
        {/* tweets */}
        <Tweets username="suhailmisbah" caption={data.caption} imageurl={data.url}/>

        {/* sample tweets */}
        <Tweets username="fashan" caption="abstract art" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-005.jpg"/>
        <Tweets username="asam"  caption="i am awsome" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-002.jpg"/>
        <Tweets username="catlover" caption="what a magnificent art" imageurl="https://avante.biz/wp-content/uploads/Awsome-Wallpapers/Awsome-Wallpapers-001.jpg"/>
        <Tweets username="artperson" caption="beautifull" imageurl="https://avante.biz/wp-content/uploads/Images-Of-Spring-Wallpapers/Images-Of-Spring-Wallpapers-001.jpg"/>
        </div>
    )
}

export default MainBody
