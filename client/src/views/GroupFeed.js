import React from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { Button, Paper } from '@material-ui/core';
import Post from '../components/Post.jsx';
import Node from '../components/Node.jsx';
import Notification  from '../components/Notification';
import { withStyles } from '@material-ui/styles';
import { notifications, posts, peopleNetwork, resources } from '../MockData.js';

const Wrapper = styled.div`
    height: 100%;
`
const DashboardTop = styled.div`
    top: 10px;
    z-index: 2;
    display: flex;
    position: sticky;
    align-items: center;
`
    const DrawerMenu = styled.div`
        height: 7vh;
        width: 20vw;
        display: flex;
        align-items: center;
        background-color: #f5faf9;
        // background-color: whitesmoke;
        justify-content: space-around;
        border: solid white 2px;
    `
    const DrawerContent = styled.div`{
        background-color: whitesmoke;
        width: 20vw;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: space-around;
    }`

const Mid = styled.div`{
    display: flex;
}`

    const MainMenu = styled.div`
    height: 7vh;
    width: 80vw;
    display: flex;
    background-color: #ecf5e8;
    background-color: #b19fb0;
    justify-content: space-around;
    background-color: whitesmoke;
    `

    const Posts = styled.div`{
        height: 100vh;
        overflow: scroll;
        width: 80vw;
        display: flex;
        flex-direction: column;
    }`

    const Network = styled.div`{
        width: 75vw;
        height: 100vh;
    }`

        // const ConnectionsViz = styled.div`{
        //     background: url( ${ props => props.img } );
        //     height: 8vh;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     border-bottom: 1px solid whitesmoke;
        // }`

        const ConnectionsList = styled.div`{
            display: flex;
            flex-wrap: wrap;
            height: 90vh;
            overflow: scroll;
            justify-content: center;
        }`

    const SavedResources = styled.div`{
        width: 75vw;
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
        justify-content: center;
    }`

    const styles = () => ({
        resourceCard: {
            margin: '4%',
            elevation: '3',
            width: '150px',
            height: '150px',
        }
    })

const GroupFeed = ( props ) => {
    const { classes } = props
    const [ view, setView ] = useState( 'newsfeed' );

    return (
        <Wrapper>
            <DashboardTop>
                <DrawerMenu>
                    <Button> <i class="fas fa-bell" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button> <i class="fad fa-users" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button disabled > <i class="fas fa-envelope" style={ { fontSize: '1.2rem' } } /> </Button>
                </DrawerMenu>
                <MainMenu>
                    <Button disabled onClick= { () => setView( 'worldview' ) } > Worldview </Button>
                    <Button disabled  onClick= { () => setView( 'resources' ) } > Resources </Button>
                    <Button disabled  onClick= { () => setView( 'writings' ) } > Writings </Button>
                    <Button onClick= { () => setView( 'newsfeed' ) } > NewsFeed </Button>
                    <Button  onClick= { () => setView( 'network' ) } > Network </Button>
                </MainMenu>
            </DashboardTop>

            <Mid>
                <DrawerContent>
                    { 
                        notifications.map( notif => {
                            return (
                                <Notification
                                    subject = { notif.subject }
                                    action = { notif.action }
                                    object = { notif.object }
                                />
                            )
                        })
                    }
                </DrawerContent>

                { ( view === 'newsfeed' || view === 'writings' ) && 
                    <Posts>
                        {
                            posts.map( post => {
                                return (
                                    <Post 
                                        showComments = { true }
                                        isParentPost = { true }
                                        avatar = { post.avatar }
                                        time = { post.time }
                                        username = { post.username }
                                        content = { post.content }
                                        commentCount = { post.commentsCount }
                                        protestCount = { post.commentsCount }
                                        extensionCount = { post.commentsCount }
                                    />
                                )
                            })
                        }
                    </Posts>
                } 

                { ( view === 'network' || view === 'worldview' ) && 
                    <Network>
                        {/* <ConnectionsViz img='assets/images/connections.gif'>
                            <p style={{
                                fontSize: '1.5rem',
                                letterSpacing: '10px',
                                backgroundColor: 'transparent',
                                boxShadow: '1px 1px 200px 1px #e8f5f3',
                            }}>
                                Coming Soon
                            </p>
                        </ConnectionsViz> */}
                        <ConnectionsList>
                            {
                                peopleNetwork.map( datum => {
                                    return (
                                        <Node 
                                            name = { datum.name }
                                            alignmentScore = { datum.alignmentScore }
                                            classification = { datum.classification }
                                            requestDate = { datum.requestDate }
                                            decisionDate = { datum.decisionDate }
                                        />
                                    )
                                })
                            }
                        </ConnectionsList>
                    </Network>
                } 

                { ( view === 'resources' ) && 
                    <SavedResources>
                        {
                            resources.map( datum => {
                                return (
                                    <Paper className = { classes.resourceCard } >
                                    </Paper>
                                )
                            })
                        }
                    </SavedResources>
                } 

            </Mid>
        </Wrapper>
    )
}

export default withStyles( styles )( GroupFeed );