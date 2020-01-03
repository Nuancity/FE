import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Button } from '@material-ui/core';


const NewPost = ( props ) => {

    const URL = 'https://nuancity.herokuapp.com/api';
    const [ content, setContent ] = useState( "" );
    const creator_id = 1;
    const category_id = 1;

    const handleBodyChange = value => { setContent( value ) };

    const makeNew = () => {
        axios.post( `${ URL }/posts`, { content, creator_id, category_id } )
        .then( res => {
            // props.history.push( '/posts' )
            console.log( res, 'new post created on front end' );
        })
        .catch( err => {
            console.log( err )
        })
    };
  
    return (
        <div className="editor">
            <ReactQuill 
                value = { content }
                onChange={handleBodyChange}
                modules={NewPost.modules}
                formats={NewPost.formats}
                placeholder="what's on your mind?"
            />
            <Button onClick = { makeNew }>Submit</Button>
        </div>
    )
}

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
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

NewPost.formats = [
'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent','link', 'image', 'video'
]
  

export default NewPost;