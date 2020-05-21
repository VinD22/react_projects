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
    return state
}

export default postReducer