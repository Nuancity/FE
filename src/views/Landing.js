import { withStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import styled from 'styled-components';
import React, { useState } from 'react';

const TopStyles = styled.div`
    height: 81vh;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    // background-color: whitesmoke;
`
    const Header = styled.h2`
        width: 55vw;
        margin: 5%;
        font-size: 2rem;
        letter-spacing: 3px;
        color: #393a4d;
        border-bottom: solid #393a4d 2px;
    `

    const Photo = styled.img`
        // width: 100vw;
        height: 75vh;
        // margin-left: 0%;
        opacity: 0.7;
        // border: solid 2px black;
        margin-top: 6%;
    `

    const Buttons = styled.div`
        width: 24vw;
        display: flex;
        margin-left: 60%;
        justify-content: space-between;
        opacity: 0.1;
    `

const Features = styled.div`
    height: 65vh;
    display: flex;
    background-color: #f5f5f5;
    justify-content: space-around;
    padding-bottom: 5%;
    opacity: 0.2;
`

const Bottom = styled.div`
    background-color: #f5f5f5;
    padding-bottom: 4%;
    // background: url( ${ props => props.img } );
    // background-size: contain;
`
    const Chart = styled.img`
        width: 70vw;
        margin-top: 3%;
        margin-left: 25%;
    `
    const BottomButtons = styled(Buttons)`
        margin-left: 5%;
        margin-top: 5%;
    `

const Modal = styled.div`{
    height: 30vh;
    width: 60vw;
    border: none;
    background-color: white;
    position: absolute;
    bottom: 170px;
    margin-left: 15%;
    // border: solid #381b57 1px;
    box-shadow: 1px 1px 1px 1px gray;
    box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.5);
}`

const EmailButton = styled.button`{
    height: 20px;
    width: 50px;
    border: solid purple 2px;
}`

const SubscribeInput = styled.input`{
    border: solid black 1px;
    height: 30px;
    width: 20vw;
    margin: 4%;
    padding-left: 15px;
    font-size: 1.5rem;
}`

const Footer = styled.div`{
    width: 100vw;
    height: 20vh;
    // background-color: whitesmoke;
}`

// =============================================

const styles = () => ({ 
    featureCard: { 
        height: "40vh", 
        width: "30%", 
        paddingBottom: "2%",
        marginTop: "8%", 
        boxShadow: "1px 1px 1px 1px #4c8893"  
    }, 
    browseButton: { 
        borderColor: "#009588", 
        color: "#009588", 
        '&:hover': {
            backgroundColor: green[ 50 ],
            borderColor: "#009588", 
        },
    },
});

// =============================================


const Landing = ( props ) => {
    const { classes } = props;

    const [ open, setOpen ]  = useState( true );

    const handleModalChange = () => {
        setOpen( !open ); 
    };


// =============================================

    let FeatureCopy = ( header, p ) => {
        const Content = styled.p` 
            padding: 7%;
        `
        const CardTitle = styled.p`
            padding: 2%;
            background: rgb(179,177,224);
            background: linear-gradient(180deg, rgba(179,177,224,0.6713060224089635) 0%, rgba(195,210,215,1) 100%);
        `
        header = 'Feature 1';

        p = ' Maecenas et eros arcu. Aenean dignissim commodo dolor sit amet iaculis. Nullam libero orci, dignissim id est vitae, viverra dapibus ipsum. Nunc elementum vehicula lorem, vel malesuada nibh maximus at. Sed pellentesque justo orci, sit amet porttitor arcu sollicitudin sit amet. Aenean eu porttitor diam. ';

        return (
            <Paper className={ classes.featureCard } elevation='1' >
                <CardTitle> { header } </CardTitle>
                <Content> { p } </Content>
            </Paper>
        )
    }

    // =============================================

    return (
        <div>
            <TopStyles >
                <Photo src='/images/undraw_posting.svg' alt='calender' />
                {/* <Buttons >
                    <Button href='https://www.nuancity.com/topics' variant='outlined' size='large' color='primary' > Browse Content </Button> 
                    <Button className={ classes.browseButton } variant='outlined' size='large' color='primary' > Request Access </Button> 
                </Buttons> */}

                <Modal
                    open = { open }
                    onClose = { handleModalChange } >
                    <Header> 
                        Meet
                        <span style = {{
                                fontSize: '30px',
                                color: '#381b57'
                        }}> Nuancity </span> 
                        In 2020.
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

            {/* <Features >
                <FeatureCopy />
                <FeatureCopy />
                <FeatureCopy />
            </Features>

            <Bottom img='assets/images/geometric.jpg'>
                <Chart src='images/undraw_real.svg' />
                <BottomButtons >
                    <Button href='/browse' variant='outlined' size='large' color='primary' > Browse Content </Button> 
                    <Button className={ classes.browseButton } variant='outlined' size='large' color='primary' > Request Access </Button> 
                </BottomButtons>
            </Bottom> */}

            {/* <Footer /> */}
        </div>
    )
}

export default withStyles( styles )( Landing );
