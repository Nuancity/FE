import React, { useState } from 'react';
import styled from 'styled-components';
import TimeStamp from './TimeStamp.jsx';
import IconSmallButton from './IconSmallButton.jsx';
import { Avatar } from './Avatar.jsx';
import { Link, TextField } from '@material-ui/core';
import { posts } from '../MockData.js';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';

const Wrapper = styled.div`{
    width: 85%;
    margin: 0 auto;
    margin-bottom: 3%;
    // margin-top: 3%;
    background-color: white;
    border-bottom: solid whitesmoke 1px;
    // border-top: solid whitesmoke 1px;
    // box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.25);
    height: 100%;
    padding: 3%;
}`

const Top = styled.div`{
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}`
    const Details = styled.div`{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }`

const Content = styled.p`{
    display: flex;
    margin-bottom: 15px;
}`

const Reactions = styled.div`{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 2%;    
    // margin-top: 3%;
}`
    // const Emojis = styled.div`{
    //     display: flex;
    //     align-items: center;
    // }`

const CommentBar = styled.div`{
    display: flex;
    justify-content: flex-end;
    // margin-bottom: 3%;
}`

const CommentsWrapper = styled.div`{
    // border-bottom: solid silver 1px;
    margin-left: 5%;
    margin-top: 3%;
    margin-bottom: 55px;
    overflow: scroll;
}`

    const Comments = styled.div`{
        overflow: scroll;
        height: 50vh;
        padding: 2%,
        margin-right: 5%
        // display: flex;
        // justify-content: space-around;
    }`

const styles = () => ({
    commentBar: {
        width: '80%',
        color: 'red',
        '&:focus': {
            borderColor: 'silver'
        }
    },
});

const Post = ( props ) => {
    const { classes } = props;
    const [ newComment, setNewComment ] = useState( null );

    const commentHandler = ( e ) => {
        e.preventDefault();
        setNewComment( e.target.value );
    }

    const submitComment = ( comment = newComment ) => {
        axios
           .post( 'http://localhost:5000/api/posts', comment )
           .then( res => setNewComment( res.data ) )
           .catch( err => console.log( err ) ); 
    }

    return (
        <Wrapper>
            {/* <Tag></Tag> */}
            <Top>
                <Details>
                    <Avatar src = { props.avatar_url } />
                    <p> 
                        { props.username || 'Yanna Faith' }  <br/>
                        <TimeStamp style = { { marginLeft: '2px' } }> { props.timestamp || '12/31/1997 11:00am' } </TimeStamp>
                    </p>
                </Details>
                <IconSmallButton> <i class="far fa-share-alt"></i> </IconSmallButton> 
            </Top>

            <Content>
                { 
                    props.content 
                }
            </Content>

            <Reactions>
                {/* <Emojis>
                    <IconSmallButton> { props.reactionsCount || 20 } </IconSmallButton>
                    <IconSmallButton> <i class="far fa-thumbs-up"> </i> </IconSmallButton>
                    <IconSmallButton> <i class="far fa-thumbs-down"></i> </IconSmallButton>
                    <IconSmallButton> <span role='img' aria-label='fist' > ✊🏽 </span> </IconSmallButton>
                    <IconSmallButton> <span role='img' aria-label='fist' > ❤️  </span> </IconSmallButton>
                    <IconSmallButton> <span role='img' aria-label='fist' > 🙄 </span> </IconSmallButton>
                    <IconSmallButton> <span role='img' aria-label='fist' > 👀 </span> </IconSmallButton>
                    <IconSmallButton> <span role='img' aria-label='fist' > 💩 </span> </IconSmallButton>
                    <IconSmallButton> <i class="fal fa-plus"></i> </IconSmallButton>
                </Emojis> */}
                {
                    <p style={{
                        // backgroundColor: 'whitesmoke'
                    }}> 
                        {
                            props.isParentPost &&
                            <Link 
                                href = 'http://localhost:3000/post'
                                variant = 'text'
                                style = { { 
                                        marginRight: '20px',
                                        color: 'black',
                                        marginTop: '3%',
                                    } 
                                } > 
                                See more
                            </Link>
                        }
                    </p>
                }
            </Reactions>

            <CommentBar>
                <TextField 
                    multiline 
                    margin = "normal"
                    id = "outlined-name"
                    placeholder = 'Extend or Contest'
                    className = { classes.commentBar } 
                    onChange = { commentHandler }
                    onSubmit = { submitComment }
                />
            </CommentBar>

            { props.showComments && // if this is a comment / child post
                    <Comments style={{ backgroundColor: 'none' }}>
                        {
                            posts.map( comm => {
                                return (
                                    <CommentsWrapper>
                                        <Details>
                                            <Avatar src = { comm.avatar } />
                                            <p> 
                                                { props.username || 'Yanna Faith' }  <br/>
                                                <TimeStamp style={ { marginLeft: '2px'} }> { props.time || '12/31/1997 11:00am' } </TimeStamp>
                                            </p>
                                        </Details>
                                        <Content>
                                            { 
                                                props.content || 'Maecenas et eros arcu. Aenean dignissim commodo dolor sit amet iaculis. Nullam libero orci, dignissim id est vitae, viverra dapibus ipsum. Nunc elementum vehicula lorem, vel malesuada nibh maximus at. Sed pellentesque justo orci, sit amet porttitor arcu sollicitudin sit amet. Aenean eu porttitor diam...' 
                                            }
                                        </Content>
                                        {/* <Emojis>
                                            <IconSmallButton> { props.reactionsCount || 20 } </IconSmallButton>
                                            <IconSmallButton><i class="far fa-thumbs-up"></i> </IconSmallButton>
                                            <IconSmallButton><i class="far fa-thumbs-down"></i> </IconSmallButton>
                                            <IconSmallButton> <span role='img' aria-label='fist' > ✊🏽 </span> </IconSmallButton>
                                            <IconSmallButton> <span role='img' aria-label='fist' > ❤️  </span> </IconSmallButton>
                                            <IconSmallButton> <span role='img' aria-label='fist' > 🙄 </span> </IconSmallButton>
                                            <IconSmallButton> <span role='img' aria-label='fist' > 👀 </span> </IconSmallButton>
                                            <IconSmallButton> <span role='img' aria-label='fist' > 💩 </span> </IconSmallButton>
                                        </Emojis> */}
                                </CommentsWrapper>
                                )
                            })
                        }
                     </Comments>
            }
        </Wrapper>
    )
}

export default withStyles( styles ) ( Post );