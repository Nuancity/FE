import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { resources } from '../MockData.js';
import axios from 'axios';

const SavedResources = styled.div`{
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    justify-content: center;
}`

const File = styled.img`{
    width: 150px;
    height: 170px;
    margin: 4%;
}`

const Resources = () => {
    const [ files, setFiles ] = useState( resources );
    const [ filePath, setFilePath ] = useState( null );

    const getFiles = () => {
        axios.get( 'http://localhost:5000/api/upload' )
        .then( res => setFiles( res.data ))
        .catch( err => console.log( err ) );
    };

    const handleFileChange = e => {
        const filePath = { path:'https://yalebooksnetwork.org/yupblog/wp-content/uploads/sites/4/2016/05/fractals.jpg'};
        setFilePath( filePath );
    }
    
    const uploadFile = () => {
        axios.post( 'http://localhost:5000/api/upload', filePath )
        .catch(err => alert( err ));
        getFiles();
    };

    useEffect( () => {
        getFiles();
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
                {
                    files.map( datum => {
                        return (
                            <File src = { datum.url } />
                        )
                    })
                }
            </SavedResources>
        </div>
    )
}

export default Resources;