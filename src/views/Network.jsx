import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Node from '../components/Node.jsx';
import { peopleNetwork } from '../MockData.js';

const ConnectionsList = styled.div`{
    display: flex;
    flex-wrap: wrap;
    height: 90vh;
    overflow: scroll;
    justify-content: space-around;
    height: 100%;
    background-color: white;
}`

const Network = () => {
    const [ users, setUsers ] = useState( peopleNetwork );

    const getUsers = () => {
        axios.get( 'http://localhost:5000/api/users' )
        .then( res => setUsers( res.data ) )
        .catch( err => console.log( err ) );
    };
    
    useEffect( () => {
        getUsers();
    }, [ users ] ); 

    return (
        <ConnectionsList>
        {
            users.map( datum => {
                return (
                    <Node 
                        name = { datum.name }
                        avatar = { datum.avatar_url }
                        alignmentScore = { datum.alignmentScore }
                        classification = { datum.classification }
                        requestDate = { datum.requestDate }
                        decisionDate = { datum.decisionDate }
                    />
                )
            })
        }
    </ConnectionsList>
    )
}

export default Network;