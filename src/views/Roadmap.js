import React from 'react';
import styled from 'styled-components';

const primary = '#4a4b64';

const Wrapper = styled.div`{
    // border: solid green 2px;
    width: 90vw;
    margin: 0 auto;
    padding: 1%;
    // margin-top: 1%;
}`

const Heading = styled.h1`
    border-bottom: solid ${ primary } 2px;
    font-size: 1.7rem;
    margin-top: 2%;
    margin-bottom: 15px;
    // background-color: whitesmoke;
`

const Content = styled.p`{
    font-size: 1.3rem;
    padding: 2%;
    background-color: whitesmoke;
}`

// const Main = styled( Heading )`
//     display: flex;
//     justify-content: center;
//     margin-bottom: 8%;
//     background-color: whitesmoke;
//     margin-top: 5%;
// `
const Roadmap = () => {
    return (
        <Wrapper>
            {/* <Main> A learning expirement, aiming to change the way we learn. </Main> */}
            <Heading> Mission </Heading>
            <Content>
                Let's start with the boldest claim: that Nuancity could become an alternative Peer Review system.  At present, "Peer Review" commonly refers to the process of researchers submitting their findings into academic journals.  Nuancity flips two central aspects of "Peer Review" onto it's head: the wait time, and the part of the creative and research processes that are being reviewed. 
            </Content>
            <Heading> Peer Review Reimagined </Heading>
            <Content>
                Let's start with the boldest claim: that Nuancity is becoming an alternative Peer Review system.  At present, "Peer Review" commonly refers to the process of researchers submitting their findings into academic journals.  Nuancity flips two central aspects of "Peer Review" onto it's head: the wait time, and the part of the creative and research processes that are being reviewed. 
                <br/> <br/>
                The wait time of the Peer Review process depends on the participants in the discussion.  To register a debate, the opposing parties need a time and a topic for the contestants to have positions on.  For live debates, the wait time is nearly eliminated because the contestants respond to each other in real time, in writing. Once an exchange is no longer "live" or "streaming", others can add to it as they would a regular thread. Nuancity supports near-synchornous communication by holding participants accountable to the topics they defend, while still allowing timers to be set flexibly, so that expectations for response wait-time remain realistic. 
                <br/> <br/>
            </Content>
            <Heading> Social Learning Streamlined </Heading>
            <Content>
                Let's start with the boldest claim: that Nuancity could become an alternative Peer Review system.  At present, "Peer Review" commonly refers to the process of researchers submitting their findings into academic journals.  Nuancity flips two central aspects of "Peer Review" onto it's head: the wait time, and the part of the creative and research processes that are being reviewed. 
                <br/> <br/>
                The wait time of the Peer Review process depends on the participants in the discussion.  To register a debate, the opposing parties need a time and a topic for the contestants to have positions on.  For live debates, the wait time is nearly eliminated because the contestants respond to each other in real time, in writing. Once an exchange is no longer "live" or "streaming", others can add to it as they would a regular thread. Nuancity supports near-synchornous communication by holding participants accountable to the topics they defend, while still allowing timers to be set flexibly, so that expectations for response wait-time remain realistic. 
                <br/> <br/>
            </Content>
            <Heading> Information Organized </Heading>
            <Content>
                Let's start with the boldest claim: that Nuancity could become an alternative Peer Review system.  At present, "Peer Review" commonly refers to the process of researchers submitting their findings into academic journals.  Nuancity flips two central aspects of "Peer Review" onto it's head: the wait time, and the part of the creative and research processes that are being reviewed. 
                <br/> <br/>
                The wait time of the Peer Review process depends on the participants in the discussion.  To register a debate, the opposing parties need a time and a topic for the contestants to have positions on.  For live debates, the wait time is nearly eliminated because the contestants respond to each other in real time, in writing. Once an exchange is no longer "live" or "streaming", others can add to it as they would a regular thread. Nuancity supports near-synchornous communication by holding participants accountable to the topics they defend, while still allowing timers to be set flexibly, so that expectations for response wait-time remain realistic. 
                <br/> <br/>
            </Content>
            <Heading> Creativity Unleashed </Heading>
            <Content>
                Let's start with the boldest claim: that Nuancity could become an alternative Peer Review system.  At present, "Peer Review" commonly refers to the process of researchers submitting their findings into academic journals.  Nuancity flips two central aspects of "Peer Review" onto it's head: the wait time, and the part of the creative and research processes that are being reviewed. 
                <br/> <br/>
                The wait time of the Peer Review process depends on the participants in the discussion.  To register a debate, the opposing parties need a time and a topic for the contestants to have positions on.  For live debates, the wait time is nearly eliminated because the contestants respond to each other in real time, in writing. Once an exchange is no longer "live" or "streaming", others can add to it as they would a regular thread. Nuancity supports near-synchornous communication by holding participants accountable to the topics they defend, while still allowing timers to be set flexibly, so that expectations for response wait-time remain realistic. 
                <br/> <br/>
            </Content>
        </Wrapper>
    )
}

export default Roadmap;