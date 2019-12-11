import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`{
    border: solid silver 1px;
    display: flex;
    justify-content: space-around;
    width: 20vw;

}`
    const Input = styled.input`{
        width: 90%;
        outline: none;
        font-size: 14px;
    }`

const Search = () => {
    return (
        <SearchDiv>
            <i class="fal fa-search" style={{ padding: '5px' }} />
            <Input placeholder = "Enter a topic..." />
        </SearchDiv>
    )
}

export default Search;