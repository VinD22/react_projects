import React, { useState } from 'react'

import { connect } from 'react-redux'

const AddPost = (props) => {

    const [postId, setPostId] = useState(3);
    const [postName, setPostName] = useState('');
    const [postContent, setPostContent] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (postName === '' || postContent === '') {
            alert('Enter post name and post content')
        } else {
            props.addPost({
                id: postId,
                title: postName,
                content: postContent
            })
            setPostId(prevState => prevState + 1)
            setPostName('')
            setPostContent('')
        }
    }

    return (
        <div>
            <div className="container" style={{ margin: '3rem auto' }}>
                <h3 className="black-text center-align">React Blog</h3>
                <form onSubmit={e => onFormSubmit(e)}>
                    <div className="input-field">
                        <label htmlFor="post_title" >Title</label>
                        <input type="text" name="title" value={postName} onChange={e => setPostName(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="post_content">Content</label>
                        <textarea name="content" className="materialize-textarea" value={postContent} onChange={e => setPostContent(e.target.value)}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn green">
                            Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch({ type: 'ADD_POST', post })
        }
    }
}


export default connect(null, mapDispatchToProps)(AddPost)