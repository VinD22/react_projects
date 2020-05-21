import React from 'react'

export const AddPost = () => {
    return (
        <div>
            <div className="container" style={{ margin: '3rem auto' }}>
                <h3 className="black-text center-align">React Blog</h3>
                <form>
                    <div className="input-field">
                        <label htmlFor="post_title" >Title</label>
                        <input type="text" name="title" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="post_content">Content</label>
                        <textarea name="content" className="materialize-textarea"></textarea>
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
