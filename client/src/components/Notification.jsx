import React from 'react';
import styled from 'styled-components';
import TimeStamp from './TimeStamp.jsx';

const Notification = ( props ) => {
    
    const Notification = styled.div`{
        width: 80%;
        display: flex;
        margin: 0 auto;
        margin-top: 5%;
        margin-bottom: 5%;
        padding: 15px;
        background-color: white;
        justify-content: center;
        flex-direction: column;
        border-bottom: solid #4c8893 1px;
    }`



    return (
        <Notification>
            <p>
               { props.subject } { props.action } your { props.object } <br/>
                <TimeStamp > { props.time || '12/31/1997 11:01pm' } </TimeStamp>
            </p>
        </Notification> 
    )
}

export default Notification;