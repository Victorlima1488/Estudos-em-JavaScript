const Author = require("./Author");

const Victor = new Author("Victor Lima")

const post = Victor.writePost("Comparator e comparable em Java", "Lorem ipsum dolor sic...")

post.addComment("Lucas", "Muito bom!")
post.addComment("Neto", "Achei muito interessante.")

post.addLike()
post.addLike()
post.addLike()
post.addLike()
post.addLike()

console.log(Victor)
console.log(post)