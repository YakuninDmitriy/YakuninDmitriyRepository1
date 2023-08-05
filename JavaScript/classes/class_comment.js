class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    downvote() {
        this.votesQty -= 1
        if (this.votesQty < 0) {
            return this.votesQty = 0
            }
    }
}

const firstComment = new Comment ('First comment')

function newFunction(a, b) {
    let c = a + b
    if (c < 2) {
        firstComment.upvote()
        return console.log(firstComment.votesQty)
    }
    if (c >= 2) {
        firstComment.downvote()
        return console.log(firstComment.votesQty)
    }
    return c
}

newFunction(1,0)
newFunction(1,9)

console.log(firstComment)
