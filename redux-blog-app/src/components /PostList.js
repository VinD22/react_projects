import React from 'react'
import PostDetail from './PostDetail'
import { connect } from 'react-redux'

const PostList = (props) => {


    const { posts } = props;

    // useEffect(() => {
    //     console.log(props);
    // }, [])

    return (
        < div className="container" >
            <div className="row">
                {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
            </div>
        </div >
    )
}

// Using connect to get state from global state into the props. 
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList)