import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const SavedResources = styled.div`{
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    justify-content: space-around;
`

const File = styled.img`{
    width: 150px;
    height: 170px;
    margin: 3%;
`

const Resources = () => {
    const [ files, setFiles ] = useState( null );
    const [ filePath, setFilePath ] = useState( null );

    const getFiles = () => {
        axios.get( 'https://nuancity.herokuapp.com/api/upload' )
        .then( res => setTimeout( setFiles( res.data ), 3000 ))
        .catch( err => console.log( err ) );
    };

    const handleFileChange = e => {
        const filePath = { path:'https://yalebooksnetwork.org/yupblog/wp-content/uploads/sites/4/2016/05/fractals.jpg' };
        setFilePath( filePath );
    };
    
    const uploadFile = () => {
        axios.post( 'https://nuancity.herokuapp.com/api/upload', filePath )
        .catch(err => alert( err ));
        getFiles();
    };

    useEffect( () => {
        getFiles()
    }, [ files ] ); 

    return (
        <div style = {{ margin: '3%' }}>
            <input 
                type = 'file'
                onChange = { handleFileChange }  
            />
            <button 
                onClick = { uploadFile } 
                style = {{ color: 'red' , height: '30px' }} 
            > Upload 
            </button>
            <SavedResources>
                { files ? files.map( datum => {
                    return (
                        <File src = { datum.url } />
                    );
                 }) :  
                < img 
                    src = '/images/Atom-2.2s-151px.svg'
                    alt = 'spinner'  
                    style = {{ 
                        marginTop: '25%'
                    }}
                /> }
            </SavedResources>
        </div>
    )
}

export default Resources;