import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { SeeMoreButton, Headings } from '../scomps.js';

const NewPost = (props) => {

    const URL = 'https://realityisgod.herokuapp.com';
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const handleBodyChange = (value) =>  {setBody(value)};
    const handleTitleChange = (e) =>  {setTitle(e.target.value)};
    const handleSummaryChange = (e) =>  {setSummary(e.target.value)};

    const makeNew = () => {
        axios.post(`${URL}/posts`, {title, summary, body})
        .then((res) => {
            props.history.push('/posts')
        })
        .catch((err) => {
            console.log(err)
        })
    }
  
    return (
        <div className="editor">
            <Headings>
                <input 
                    onChange={handleTitleChange} 
                    placeholder="title" 
                />
                <textarea 
                    onChange={handleSummaryChange} 
                    placeholder="summary"
                />
            </Headings>
            <ReactQuill 
                value={body}
                onChange={handleBodyChange}
                modules={NewPost.modules}
                formats={NewPost.formats}
                placeholder="what's on your mind?"
            />
            <SeeMoreButton onClick={makeNew}>Submit</SeeMoreButton>
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