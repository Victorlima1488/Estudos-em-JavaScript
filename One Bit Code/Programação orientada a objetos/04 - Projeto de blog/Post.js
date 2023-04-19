const Comment = require("./Comment")

class Post{
    like = 0

    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(username, content){
        this.comments.push(new Comment(username, content))
    }

    getComments(){
        return this.comments.length()
    }

    addLike(){
        this.like +=1
    }

    getLike(){
        return this.like
    }
}

module.exports = Post