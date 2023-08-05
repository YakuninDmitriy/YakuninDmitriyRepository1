class Comment {
    constructor(text) {
        this.text = text,
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static multvote(kek) {
        return kek
    }
}

let firstComment = new Comment('First Comment')

firstComment.upvote()
firstComment.upvote()

let kekol = Comment.multvote(3)


console.log(firstComment.text, firstComment.votesQty)
console.log(kekol)

console.log(Comment.prototype === firstComment.__proto__)