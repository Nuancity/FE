Post Component
----------------

<Emojis>
    <IconSmallButton> { props.reactionsCount || 20 } </IconSmallButton>
    <IconSmallButton> <i class="far fa-thumbs-up"> </i> </IconSmallButton>
    <IconSmallButton> <i class="far fa-thumbs-down"></i> </IconSmallButton>
    <IconSmallButton> <span role='img' aria-label='fist' > ✊🏽 </span> </IconSmallButton>
    <IconSmallButton> <span role='img' aria-label='fist' > ❤️  </span> </IconSmallButton>
    <IconSmallButton> <span role='img' aria-label='fist' > 🙄 </span> </IconSmallButton>
    <IconSmallButton> <span role='img' aria-label='fist' > 👀 </span> </IconSmallButton>
    <IconSmallButton> <span role='img' aria-label='fist' > 💩 </span> </IconSmallButton>
    <IconSmallButton> <i class="fal fa-plus"></i> </IconSmallButton>
</Emojis> 


Dashboard View 
-----------------
const getNotifs = () => {
    axios.get( 'http://localhost:5000/api/notifs' )
    .then( res => setNotifs( res.data ) )
    .catch( err => console.log( err ) );
};
useEffect( () => {
    getNotifs();
}, [ notifs ] ); 


Nav Component 
--------------------
const localHost = 'http://localhost:3000/';

const Logo = styled.img`
    height: 5vh;
    margin-left: 20px;
`

<Logo src='/images/logovar.jpg'/> 

Landing Page
------------

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

const EmailButton = styled.button`{
    height: 20px;
    width: 50px;
    border: solid purple 2px;
}`

    const Buttons = styled.div`
        width: 24vw;
        display: flex;
        margin-left: 60%;
        justify-content: space-between;
        opacity: 0.1;
    `

const Footer = styled.div`{
    width: 100vw;
    height: 20vh;
    // background-color: whitesmoke;
}`

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


Node Component
------------------
{/* <p style={{
    // border: 'solid red 2px',
    // width: '100px'
}}> { props.classification } </p>
<p> { props.alignmentScore } </p> */}

const Top = styled.div`{
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
`

// const Hidden = styled.div`{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     border: solid purple 2px;
//     // display: none;
//     border-radius: 15px;
// }`

/*

<Bottom>
    <p> { props.alignmentScore } { props.classification } </p>
    <p> { props.requestDate } <br/> { props.decisionDate } </p>
</Bottom>

*/