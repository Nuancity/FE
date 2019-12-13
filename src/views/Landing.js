import { Button } from '@material-ui/core';
import styled from 'styled-components';
import React, { /* useState */ } from 'react';

const TopStyles = styled.div`
    height: 90vh;
`
    const Header = styled.h2`
        width: 55vw;
        margin-top: 5%;
        margin-left: 3%;
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: #393a4d;
        border-bottom: solid #393a4d 2px;
    `

    const Photo = styled.img`
        height: 75vh;
        opacity: 0.7;
        margin-top: 6%;
        opacity: .1;
    `

const Modal = styled.div`{
    height: 30vh;
    width: 60vw;
    border: none;
    background-color: white;
    position: absolute;
    bottom: 100px;
    margin-left: 30%;
    // border: solid #381b57 1px;
    box-shadow: 1px 1px 1px 1px gray;
    box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.5);
    opacity: 1;
}`

const SubscribeInput = styled.input`{
    border: solid black 1px;
    height: 20px;
    width: 20vw;
    margin: 4%;
    margin-left: 3%;
    padding-left: 15px;
    font-size: 1.2rem;
}`

const Landing = () => {
    return (
        <div>
            <TopStyles >
                <Photo src='/images/undraw_posting.svg' alt='calender' />
                <Modal >
                    <Header> 
                        Meet
                        <span style = {{
                                fontSize: '20px',
                                color: '#381b57'
                        }}> Nuancity 
                        </span> In 2020.
                    </Header>
                    <div>
                        <SubscribeInput />
                        <Button
                            variant = 'contained'
                            color = 'primary'
                            size = 'large'
                        > Stay Updated 
                        </Button>
                    </div>
                </Modal>

            </TopStyles>
        </div>
    )
}

export default Landing;
