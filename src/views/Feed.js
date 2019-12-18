import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Post from '../components/Post.jsx';

const Posts = styled.div`{
    overflow: scroll;
    display: flex;
    flex-direction: column;
}`

const Feed = ( props ) => {
    const [ posts, setPosts ] = useState( [] );
    const [ newPost, setNewPost] = useState( null );

    const getPosts = () => {
        axios
        .get( 'https://nuancity.herokuapp.com/api/posts' )
        .then( res => setPosts( res.data ))
        .catch( err => console.log( err ) );
    };

    const addPostChangeHandler = ( e ) => {
        e.preventDefault();
        setNewPost( e.target.value );
    };

    const submitNewPost = () => {
         axios.post( 'https://nuancity.herokuapp.com/api/posts', newPost )
        .then( res => setPosts( res.data ) )
        .catch( err => console.log( err ) ); 
    };
    
    useEffect( () => {
        getPosts();
    }, [ posts ] ); 

    return (
        <Posts>
        { posts.map( post => {
            return (
                <Post 
                    addPostChangeHandler = { addPostChangeHandler }
                    submitNewPost = { submitNewPost }
                    isParentPost = { true }
                    showComments = { false }
                    timestamp = { post.created_at }
                    content = { post.content }
                    creator_id = { post.creator_id }
                    users = { props.users }
                />
            );
         }) }
    </Posts>
    )
}

export default Feed;