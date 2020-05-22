// Reducer is a function which returns a object. 

const initState = {
    posts: [
        {
            id: 1,
            title: 'post one',
            content: 'lorem ipsum text asdas'
        },
        {
            id: 2,
            title: 'post two',
            content: 'lorem ipsum text asdas dsadasd dasd'
        }
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