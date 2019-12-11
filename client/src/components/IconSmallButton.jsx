import styled from 'styled-components';

const IconSmallButton = styled.button`
    border: none;
    outline: none;
    :hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
    :focus {
        // border: solid silver 1px;
        background-color: whitesmoke;
        padding: 10px;
        border-bottom: 1px solid black;
    }
    // :visited {
    //     background-color: whitesmoke;
    //     padding: 10px;
    //     border-bottom: 1px solid black;
    // }
`

export default  IconSmallButton;