import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Post from '../components/Post.jsx';

const Posts = styled.div`{
    overflow: scroll;
    width: 80vw;
    display: flex;
    flex-direction: column;
}`

const Newsfeed = () => {
    const [ posts, setPosts ] = useState( [] );
    const [ newPost, setNewPost] = useState( null );

    const getPosts = () => {
        axios
        .get( 'http://localhost:5000/api/posts' )
        .then( res => setPosts( res.data ))
        .catch( err => console.log( err ) );
    };

    const addPostChangeHandler = ( e ) => {
        e.preventDefault();
        setNewPost( e.target.value );
    };

    const submitNewPost = ( data ) => {
         axios.post( 'http://localhost:5000/api/posts', newPost )
        .then( res => setPosts( res.data ) )
        .catch( err => console.log( err ) ); 
    };
    
    useEffect( () => {
        getPosts();
    }, [ posts ] ); 

    return (
        <Posts>
        {
            posts.map( post => {
                return (
                    <Post 
                        addPostChangeHandler = { addPostChangeHandler }
                        submitNewPost = { submitNewPost }

                        isParentPost = { true }
                        showComments = { false }

                        time = { post.created_at }
                        content = { post.content }
                    />
                )
            })
        }
    </Posts>
    )
}

export default Newsfeed;