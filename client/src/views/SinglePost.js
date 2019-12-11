import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post.jsx';
import { posts } from '../MockData.js';
var faker = require('faker');


// const drawerProps = {
//     width: 25,
//     height: 100,
// };

// const MainProps = {
//     width: 100 - drawerProps.width,
//     height: 100,
// }

const Wrapper = styled.section`{
    // border: solid red 2px;
}`

const Top = styled.div`{
    // border: solid red 2px;
    display: flex;
}`

    // const PostStats = styled.div`{
    //     // border: solid red 2px;
    //     width: ${ drawerProps.width }vw;
    //     height: ${ drawerProps.height }vh;
    //     background-color: whitesmoke;
    // }`

    // const PostDiscussion = styled.div`{
    //     // border: solid blue 2px;
    //     width: ${ MainProps.width }vw;
    //     height: ${ MainProps.height }vh;
    //     display: flex;
    //     overflow: scroll;
    //     flex-direction: column;
    // }`

export const SinglePost = props => {
    return (
        <Wrapper>
            <Post 
                showComments = { true }
                isParentPost = { true }
                username = { faker.internet.userName() }
                content = { posts[ 0 ].content }
                avatar = { posts[ 0 ].avatar }
                time = { posts[ 0 ].time }
                reactionCount = { props.reactionCount }
                commentCount = { props.commentCount }
                protestCount = { props.protestCount }
                extensionCount = { props.extensionCount }
                //=======
                /* =========== comments properties ================ */
                comments = { props.commentsCount > 0 ? true : false }
                fullPost = { true }
                fullPostWithCommetns = { true }
                partPost = { false }
            />
            <Top>
                {/* <PostStats></PostStats> */}
                {/* <PostDiscussion>
                    {
                        posts.map( comm => {
                            return (
                                <Post
                                    showComments = { true }
                                    isParentPost = { false }
                                    username = { faker.internet.userName() }
                                    content = { posts[ 0 ].content }
                                    avatar = { posts[ 0 ].avatar }
                                    time = { posts[ 0 ].time }
                                    commentContent = { comm.commentContent }
                                    reactionCount = { comm.reactionCount }
                                    replyCount = { comm.replyCount }
                                />
                            )
                            
                        })
                    }
                </PostDiscussion> */}
            </Top>
        </Wrapper>
    )
}

