// Reducer is a function which returns a object. 

// Initial State
const initState = {
    posts: [
    ]
}

const postReducer = (state = initState, action) => {
    console.log("reducer log " + state, action);
    switch (action.type) {
        case 'DELETE_POST':
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost
            };
        case 'ADD_POST':
            const newPosts = [...state.posts, action.post]
            return {
                posts: newPosts
            }
        default:
            return state;
    }
}

export default postReducer