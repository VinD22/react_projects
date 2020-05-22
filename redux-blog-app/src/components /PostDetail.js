import React from 'react'
import { connect } from 'react-redux'

const PostDetail = (props) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        {props.post.title}
                    </span>
                    <p>{props.post.content}</p>
                </div>
                <div className="card-action">
                    <button onClick={() => props.deletePost(props.post.id)} className="btn red">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id })
        }
    }
}

export default connect(null, mapDispatchToProps)(PostDetail)
