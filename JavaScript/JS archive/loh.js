const newComment = (сomment, addedAt = Date()) => {
    let a = {
    ...comment,
    addedAt
    }
    return a
}

const comment1 = () => {
    let ab = {
    id: 1,
    name: 'Pidor',
    }
    return ab
    }

console.log(newComment(comment1()))