import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Post from '../components/Post.jsx';
// import NewPost from '../components/NewPost.jsx';

const Posts = styled.div`{
    overflow: scroll;
    display: flex;
    flex-direction: column;
}`

const Feed = ( props ) => {
    const [ posts, setPosts ] = useState( null );

    const getPosts = () => {
        axios
        .get( 'https://nuancity.herokuapp.com/api/posts' )
        .then( res => setTimeout( setPosts( res.data ), 3000 ) )
        .catch( err => console.log( err ) );
    };

    // useEffect( () => {
    //     getPosts();
    // }, [ posts ] ); 

    return (
        <Posts> 
            {/* <div>
                <NewPost />
            </div> */}
            { posts && ( props.users ) ? posts.map( post => {
            return (
                <Post 
                    isParentPost = { true }
                    showComments = { false }
                    timestamp = { post.created_at }
                    content = { post.content }
                    creator_id = { post.creator_id }
                    users = { props.users }
                />
        ) } ) : <img 
                    src = '/images/Atom-1.7s-104px.svg'
                    alt = 'spinner'  
                    style = {{ 
                        marginTop: '25%'
                    }}
                /> 
            }
        </Posts>
    );
};

export default Feed;