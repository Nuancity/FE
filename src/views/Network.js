import React from 'react';
import styled from 'styled-components';
import Node from '../components/Node.jsx';

const ConnectionsList = styled.div`{
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;
`

const Network = ( props ) => {
    return (
        <ConnectionsList>
            { props.users.map( datum => {
                return (
                    <Node 
                        name = { datum.name }
                        avatar = { datum.avatar_url }
                        alignmentScore = { datum.alignmentScore }
                        classification = { datum.classification }
                        requestDate = { datum.requestDate }
                        decisionDate = { datum.decisionDate }
                    />
                );
            }) }
    </ConnectionsList>
    );
};

export default Network;