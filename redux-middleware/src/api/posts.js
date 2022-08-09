const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id: 1,
        title: 'redux',
        body: 'redux-middleware'
    },
    {
        id: 1,
        title: 'redux-thunk',
        body: 'redux-thunk 비동기'
    },
    {
        id: 1,
        title: 'redux-saga',
        body: 'redux-saga 비동기'
    }
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostsById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id)
}
