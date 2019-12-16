import React from 'react';
import styled from 'styled-components';
import { green } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { yellow } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    top: 0;
    z-index: 1;
    height: 10vh;
    display: flex;
    position: sticky;
    align-items: center;
    background-color: #393a4d;
    box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.5);
    justify-content: space-between;
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
            <NavLinks >
                <Link to = '/'>
                    <Button 
                        className = { classes.textLink } 
                        variant = 'text' 
                        size = 'small'
                        > About
                    </Button>
                </Link>
                <Link to = '/roadmap'>
                    <Button 
                        className = { classes.textLink } 
                        variant = 'text' 
                        size = 'small'
                        > Roadmap
                    </Button>
                </Link>
                <Link to = '/dashboard'>
                    <Button 
                        className = { classes.textLink } 
                        variant = 'text' 
                        size = 'small'
                        > About
                    </Button>
                </Link>
                <Button 
                    className = { classes.upgradeButton } 
                    size = 'large' 
                    variant = 'outlined'
                    color = 'secondary'
                    onClick = { session.isUserSignedIn() ? props.signOut : props.signIn }
                    > { session.isUserSignedIn() ? 'Logout' : 'Login' } 
                </Button>
            </NavLinks>
        </Nav>
    )
}

export default withStyles( styles )( LandingNav );