import React /* { useState, useEffect } */ from 'react';
import styled from 'styled-components';
import TimeStamp from './TimeStamp.jsx';
import { Avatar } from './Avatar.jsx';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Wrapper = styled.div`{
    width: 85%;
    margin: 0 auto;
    margin-bottom: 3%;
    background-color: white;
    border-bottom: solid whitesmoke 1px;
    height: 100%;
    padding: 3%;
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

const CommentBar = styled.div`{
    display: flex;
    justify-content: flex-end;
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

    return (
        <Wrapper>
            <Details>
                <Avatar src = { props.avatar_url } />
                <p> 
                    { props.username || 'Yanna Faith' }  <br/>
                    <TimeStamp style = { { marginLeft: '2px' } } >
                        { props.timestamp } 
                    </TimeStamp>
                </p>
            </Details>
            <Content>
                { props.content } 
            </Content>
            <CommentBar>
                <TextField 
                    multiline 
                    margin = "normal"
                    id = "outlined-name"
                    placeholder = 'Extend or Contest'
                    className = { classes.commentBar }  />
            </CommentBar>
        </Wrapper>
    );
};

export default withStyles( styles ) ( Post );