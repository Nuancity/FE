import React /* { useState, useEffect } */ from 'react';
import styled from 'styled-components';
import SearchTab from '../components/SearchTab';
import { topics } from '../MockData.js';
  
// import { Breadcrumbs } from '@material-ui/core';
// import { styled  as muiStyle } from '@material-ui/styles';
// import { Button, Paper } from '@material-ui/core';


const Wrapper = styled.div`{
    display: flex;
    align-items: flex-emd;
    padding-bottom: 5%;
    height: 90vh;
}`

const Left = styled.div`
    display: flex;
    width: 50vw;
    margin-top: 20px;
    background-color: white;
    justify-content: space-around;
    border-radius: 15px;
    padding: 1%;
    align-items: center;
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.10);
`

const Right = styled( Left )`{
}`

const Header = styled.h2`{
    // border: solid red 2px;
    font-size: 1.8rem;
    padding-top: 2%;
    // display: flex;
    // justify-content: center;
    margin-left: 10%;
    
}`

const Div = styled.div`
    // border: solid red 2px;
    background-color: whitesmoke;
`

const Bottom = styled( Div )`{
    // height: 52px;
    // background-color: #70607c;
    // background-color: whitesmoke;
}`

const WelcomeMessage = styled.p`{
    // border: solid red 2px;
    background-color: whitesmoke;
    font-size: 1.6rem;
    margin-left: 10%;

}`

// const colors = {
//     'red' : '#ffebee',
//     'green' : '#e8f5e9',
//     'purple' : '#ede7f6',
//     'blue' :  '#e3f2fd',
// };

const NextButton = styled.button`{
    height: 50px;
    width: 300px;
    margin-left: 2%;
    margin-bottom: 25px;
    font-size: 2.5rem;
    letter-spacing: 2px;
    background-color: whitesmoke;
    border: solid purple 2px;
    outline: none;
    border-radius: 5px;
}`

const NewUserPage = ( props ) => {
    const { data, session } = props;
    // const [ userTopics, setUserTopics ] = useState( [] );

    return (
        <Div>
            { ( session.isUserSignedIn() && data ) &&
                <Div>
                    <Div>
                        <Header> 
                            Welcome, { data.profile.name || 'Yanna' }! Thanks for trying Nuancity. 
                        </Header>
                        <WelcomeMessage> To get started, choose at least <span style = {{
                            fontSize: '25px',
                            color: 'purple'
                        }}> 5 </span> areas that interest you </WelcomeMessage>
                    </Div>
                    <Wrapper>
                        <Left>
                            <SearchTab 
                                list = { topics.slice( 0, 6 ) } 
                                color = 'primary' 
                                count = { 10 } 
                                session = { session }
                            />
                            <SearchTab 
                                list = { topics.slice( 6, 9 ) }
                                splice =  '6:3' color = 'red' 
                                count = { 10 }
                                session = { session }
                             />
                            <SearchTab 
                                list = { topics.slice( 9, 14 ) }
                                splice = '9:5' 
                                color = 'secondary' 
                                count = { 10 }
                                session = { session }
                            />
                        </Left>
                        <Right>
                            <SearchTab 
                                list = { topics.slice( 14, 18 ) } 
                                color = 'green' 
                                count = { 10 } 
                                session = { session }
                            />
                            <SearchTab 
                                list = { topics.slice( 18, 25 ) }
                                color = 'purple' 
                                count = { 10 } 
                                session = { session }
                            />
                            <SearchTab 
                                list = { topics.slice( 25, 30 ) } 
                                color = 'blue' 
                                count = { 10 } 
                                session = { session }
                            />
                        </Right>
                    </Wrapper>
                    <Bottom>
                        <NextButton
                        > Next 
                            <i
                                style = { { fontSize: '1.7rem' } } 
                                class = "far fa-long-arrow-right"
                                onClick = { () => alert( 'click' ) }
                            />
                        </NextButton>
                    </Bottom>
                </Div>
            }
            {/* <Div>
                {
                    userTopics && <h1> { userTopics } </h1>
                }
            </Div> */}
        </Div>
    )
}

export default ( NewUserPage );