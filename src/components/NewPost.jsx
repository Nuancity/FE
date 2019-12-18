import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

const NewPost = ( props ) => {
    const URL = 'https://nuancity.herokuapp.com/api';
    const [ body, setBody ] = useState( "" );
    const handleBodyChange = value => setBody( value );

    const submitNewPost = () => {
        axios.post(`${ URL }/posts`, { body } )
       .then( res => console.log( res.data ) ) // return all posts 
       .catch( err => console.log( err ) ); 
   };

    return (
        <div className = "editor" >
            <ReactQuill 
                value = { body }
                onChange = { handleBodyChange } 
                modules = { NewPost.modules }
                formats = { NewPost.formats }
                placeholder = "what's on your mind?"
            />
            <Button onClick = { submitNewPost } > Submit </Button>
        </div>
    );
};

NewPost.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
};

NewPost.formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent','link', 'image', 'video'
];
  

export default NewPost;