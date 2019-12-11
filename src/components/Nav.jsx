import React from 'react';
import styled from 'styled-components';
import { green } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { yellow } from '@material-ui/core/colors';

const Nav = styled.nav`
    top: 0;
    z-index: 1;
    height: 10vh;
    display: flex;
    position: sticky;
    align-items: center;
    background-color: #393a4d;
    // background-color: black;
    // background-color: whitesmoke;
    box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.5);
    justify-content: space-between;
    // border: solid white 1px;
    // box-shadow: 0 2px 2px -1px rgba(0,0,0,0.25);
    // opacity: .2;
`
    const Logo = styled.img`
        height: 5vh;
        margin-left: 20px;
    `

    const NavLinks = styled.div`
        display: flex;
        justify-content: space-around;
        margin-right: 20px;
        width: 40vw;
    `

const styles = () => ({
    upgradeButton: { 
        borderColor: '#c77d1f',
        color: "#c77d1f", 
        '&:hover': {
            backgroundColor: yellow[ 50 ],
            borderColor: "#f5a122", 
        },
    },
    textLink: {
        color: 'whitesmoke',
    },
    browseButton: { 
        borderColor: "#009588", 
        color: "#009588", 
        '&:hover': {
            backgroundColor: green[ 50 ],
            borderColor: "#009588", 
        },
    },
})

const LandingNav = ( props ) => {
    const { session, classes } = props;
    return (
        <Nav>
            <Button to='/' > 
                {/* <Logo src='/images/logovar.jpg'/>  */}
            </Button>
            <NavLinks>
                <Button 
                    className = { classes.textLink } 
                    href='http://localhost:3000/' 
                    variant='text' 
                    size='small'
                    > About 
                </Button>
                <Button 
                    className = { classes.textLink } 
                    href='http://localhost:3000/roadmap'
                    variant='text'  
                    size='small' 
                    > Roadmap 
                </Button>
                <Button 
                    className = { classes.textLink } 
                    href='http://localhost:3000/dashboard' 
                    variant='text' 
                    size='small'
                    > Browse 
                </Button>
                <Button 
                    className = { classes.upgradeButton } 
                    size='large' 
                    variant='outlined'
                    color='secondary'
                    onClick = { session.isUserSignedIn() ? props.signOut : props.signIn }
                    > { session.isUserSignedIn() ? 'Logout' : 'Login' } 
                </Button>
            </NavLinks>
        </Nav>
    )
}

export default withStyles( styles )( LandingNav );