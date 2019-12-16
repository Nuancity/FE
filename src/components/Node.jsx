import React from 'react';
import styled from 'styled-components';
import { Avatar } from './Avatar';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const AvatarBubble = styled( Avatar )`
    height: 100%;
    width: 75px;
    border-radius: 15px;
`

const Summary = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`

const styles = () => ({
    document: {
        margin: '3%',
        elevation: '3',
        width: '250px',
        borderRadius: '15px',
        display: 'flex',
        height: '65px',
        justifyContent: 'space-between',
    }
});

const Node = ( props ) => {
    const { classes } = props
    return (
        <Paper className={ classes.document }>
            <AvatarBubble src = { props.avatar } />
            <Summary>
                <h3> { props.name } </h3>
            </Summary>
            <i style={{
                color: '#ce9150',
            }} class="fal fa-pencil-alt"> </i>
        </Paper>
    );
};

export default withStyles( styles )( Node );   
