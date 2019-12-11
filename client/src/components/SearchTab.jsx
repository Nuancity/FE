import React, { } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { styled  as styledm } from '@material-ui/styles';

const Wrapper = styled.ul`{
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
}`

const colors = {
    'red' : '#ffebee',
    'green' : '#e8f5e9',
    'purple' : '#ede7f6',
    'blue' :  '#e3f2fd',
    'primary' : '#e8eaf6',
    'secondary': '#fce4ec'
}  

const SearchTab = ( props ) => {

    const CustomButton = styledm( Button )({
        borderColor: props.color,
        color: props.color,
        backgroundColor: colors[ props.color ],
        '&:hover': {
            // border: `solid ${colors[ props.color ]} 2px`,
            border: `solid ${ props.color } 1px`,
            backgroundColor: props.color,
            color: 'white'
        },
        margin: '8px',
        // border: 'none'
    });

    const { session } = props

    const handleTopicAdd = ( e ) => {
        e.preventDefault();
        const topic = e.target.textContent;
        saveAddedTopics( topic );
    }

    const saveAddedTopics = ( topic ) => {
        const options = { encrypt: false }
        session.putFile( 'userTopics.json', JSON.stringify( topic ), options ).then( res => { console.log( 'yup', res )});
    }

    return (
        <Wrapper >
            { props.list.map( topic => {
                return (
                    <li> 
                        <CustomButton 
                            color = { props.color }
                            onClick = { handleTopicAdd }
                            variant = { props.variant || 'outlined' }
                            > { topic.title } 
                        </CustomButton> 
                    </li>
                )
            })
            }
        </Wrapper>
    )
}

export default SearchTab;