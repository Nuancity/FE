import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Post from '../components/Post.jsx';
import NewPost from '../components/NewPost.jsx';

const Posts = styled.div`{
    overflow: scroll;
    display: flex;
    flex-direction: column;
}`

const Feed = ( props ) => {
    const [ posts, setPosts ] = useState( [] );

    const getPosts = () => {
        axios
        .get( 'https://nuancity.herokuapp.com/api/posts' )
        .then( res => setPosts( res.data ))
        .catch( err => console.log( err ) );
    };

    useEffect( () => {
        getPosts();
    }, [ posts ] ); 

    return (
        <Posts> 
            {/* <div>
                <NewPost />
            </div> */}
            { posts.map( post => {
            return (
                <Post 
                    isParentPost = { true }
                    showComments = { false }
                    timestamp = { post.created_at }
                    content = { post.content }
                    creator_id = { post.creator_id }
                    users = { props.users }
                />
            ); }) };
        </Posts>
    );
};

export default Feed;