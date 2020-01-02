import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Notification  from '../components/Notification';
import { notifications } from '../MockData.js';
import Resources from './Resources.jsx';
import Feed from './Feed.jsx';
import Network from './Network.jsx';
import axios from 'axios';
import IconSmallButton from '../components/IconSmallButton.jsx';

const Wrapper = styled.div`
    height: 100%;
    i { color: #393a4d; }
`
const Top = styled.div`
    top: 10vh;
    z-index: 2;
    display: flex;
    position: sticky;
    align-items: center;
    background-color: whitesmoke;
`
const IconLinks = styled.div`
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TextLinks = styled.div`
    height: 7vh;
    width: 80vw;
    display: flex;
    background-color: #ecf5e8;
    justify-content: space-around;
    background-color: whitesmoke;
`
const Mid = styled.div`{
    display: flex;
    overflow: scroll;
    height: 150vh;
`
const LeftContent = styled.div`{
    background-color: whitesmoke;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    overflow: scroll;
`
const MidContent = styled.div`
    width: 55vw;
    overflow: scroll;
`

const RightContent = styled.div`
    width: 20vw;
    height: 90vh;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
`

const styles = () => ({
    resourceCard: {
        margin: '4%',
        elevation: '3',
        width: '150px',
        height: '170px',
    },
    button: {
        '&:focus': {
            backgroundColor: '#e7e7e7'
        }
    }
});

const Dashboard = ( props ) => {
    const { classes } = props;
    const [ view, setView ] = useState( 'feed' );
    const [ notifs, /* setNotifs */ ] = useState( notifications );
    const [ users, setUsers ] = useState( null );

    const getUsers = () => {
        axios
        .get( 'https://nuancity.herokuapp.com/api/users' )
        .then( res => setUsers( res.data ))
        .catch( err => console.log( err ) );
    };

    useEffect( () => {
        getUsers();
    }, [ users ] ); 

    return (
        <Wrapper>

            <Top>
                <IconLinks>
                    <Button 
                        className = { classes.button } 
                        size = 'small'
                        > <i class="fas fa-bell" style={ { fontSize: '1.2rem' } } /> 
                    </Button>
                    <Button
                        className = { classes.button } 
                        > <i class="fad fa-users" style={ { fontSize: '1.2rem' } } /> 
                    </Button>
                    <Button 
                        disabled 
                        > <i class="fas fa-envelope" style={ { fontSize: '1.2rem' } } /> 
                    </Button>
                </IconLinks>

                <TextLinks>
                    <Button className = { classes.button } onClick= { () => setView( 'feed' ) } > Feed </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'network' ) } > Network </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'resources' ) } > Resources </Button>
                    <Button className = { classes.button } disabled onClick= { () => setView( 'worldview' ) } > Worldview </Button>
                    <Button className = { classes.button } disabled  onClick= { () => setView( 'writings' ) } > Writings </Button>
                </TextLinks>
            </Top>

            <Mid> 
                <LeftContent>
                    { notifs.map( notif => {
                        return (
                            <Notification
                                subject = { notif.person }
                                action = { notif.action }
                                object = { notif.object }
                                time = { notif.time }
                            />
                        );
                    }) }
                </LeftContent>

                <MidContent>
                    { ( view === 'feed' ) && 
                        <Feed
                            users = { users } 
                    /> } 

                    { ( view === 'network' ) && 
                        <Network 
                            users = { users } 
                    /> } 

                    { ( view === 'resources' ) && 
                        <Resources />
                    }
                </MidContent>

                <RightContent>
                    <IconSmallButton> <i class="fal fa-plus"></i> </IconSmallButton>
                </RightContent>
            </Mid>

        </Wrapper>
    );
};

export default withStyles( styles )( Dashboard );