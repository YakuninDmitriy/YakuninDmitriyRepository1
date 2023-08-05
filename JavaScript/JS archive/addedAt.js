const newPost = (post, addedAt = Date()) => {
let a = {
    ...post,
    addedAt
}
return a
}

const firstPost = {
    id: 1,
    author: 'Dima',
}

console.log(newPost(firstPost))