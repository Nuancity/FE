import React, { useState, /* useEffect */ } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Notification  from '../components/Notification';
import { notifications } from '../MockData.js';
import Resources from './Resources.js';
import Feed from './Feed.js';
import Network from './Network.js';

const Wrapper = styled.div`
    height: 100%;
    i { color: #393a4d; }
`
const DashboardTop = styled.div`
    top: 7vh;
    z-index: 2;
    display: flex;
    position: sticky;
    align-items: center;
    background-color: whitesmoke;
`
    const DrawerMenu = styled.div`
        width: 25vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
    `
    const DrawerContent = styled.div`{
        background-color: whitesmoke;
        width: 25vw;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: space-around;
    }`

const Mid = styled.div`{
    display: flex;
    height: 180vh;
}`

    const MainMenu = styled.div`
    height: 7vh;
    width: 80vw;
    display: flex;
    background-color: #ecf5e8;
    justify-content: space-around;
    background-color: whitesmoke;
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
})

const Dashboard = ( props ) => {
    const { classes } = props;
    const [ view, setView ] = useState( 'feed' );
    const [ notifs, /* setNotifs */ ] = useState( notifications );

    return (
        <Wrapper>
            <DashboardTop>
                <DrawerMenu>
                    <Button className = { classes.button } > <i class="fas fa-bell" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button className = { classes.button } > <i class="fad fa-users" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button disabled > <i class="fas fa-envelope" style={ { fontSize: '1.2rem' } } /> </Button>
                </DrawerMenu>
                <MainMenu>
                    <Button className = { classes.button } onClick= { () => setView( 'feed' ) } > Feed </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'network' ) } > Network </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'resources' ) } > Resources </Button>
                    <Button className = { classes.button } disabled onClick= { () => setView( 'worldview' ) } > Worldview </Button>
                    <Button className = { classes.button } disabled  onClick= { () => setView( 'writings' ) } > Writings </Button>
                </MainMenu>
            </DashboardTop>

            <Mid> 
                <DrawerContent>
                    { 
                        notifs.map( notif => {
                            return (
                                <Notification
                                    subject = { notif.person }
                                    action = { notif.action }
                                    object = { notif.object }
                                    time = { notif.time }
                                />
                            )
                        })
                    }
                </DrawerContent>

                { ( view === 'feed' ) && 
                    <Feed />
                } 

                { ( view === 'network' ) && 
                    <Network />
                } 

                { ( view === 'resources' ) && 
                    <Resources />
                }

            </Mid>
        </Wrapper>
    );
};

export default withStyles( styles )( Dashboard );