import React from 'react';
import styled from 'styled-components';
import { Avatar } from './Avatar';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const AvatarBubble = styled( Avatar )`
    height: 100%;
    width: 25%;
    border-radius: 15px;
`
const Top = styled.div`{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    // justify-content: space-around;
    // border: solid blue 2px;
}`

const Summary = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    // border: solid purple 2px;
}`

// const Hidden = styled.div`{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     border: solid purple 2px;
//     // display: none;
//     border-radius: 15px;
// }`

const styles = () => ({
    document: {
        margin: '3%',
        elevation: '3',
        width: '200px',
        borderRadius: '15px',
        display: 'flex',
        height: '65px',
        justifyContent: 'space-between',
    }
})

const Node = ( props ) => {
    const { classes } = props
    return (
            <Paper className={ classes.document }>
                    <Top>
                        <AvatarBubble src = { props.avatar } />
                        <Summary>
                            <h3 style={{
                                // border: 'solid red 2px'
                            }}> { props.name } </h3>
                            <p style={{
                                // border: 'solid red 2px',
                                // width: '100px'
                            }}> { props.classification } </p>
                            <p> { props.alignmentScore } </p>
                        </Summary>
                        {/* <i style={{
                            color: 'red',
                            fontSize: '1.2rem'
                        }} class = "far fa-times" /> */}
                        <i style={{
                            color: '#ce9150',
                        }} class="fal fa-pencil-alt"> </i>
                    </Top>
            </Paper>
    )
}

export default withStyles( styles )( Node );   

/*

<Bottom>
    <p> { props.alignmentScore } { props.classification } </p>
    <p> { props.requestDate } <br/> { props.decisionDate } </p>
</Bottom>

*/