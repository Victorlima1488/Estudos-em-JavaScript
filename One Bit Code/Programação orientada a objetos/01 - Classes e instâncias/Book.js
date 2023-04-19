class Book{
    constructor(title){
        this.title = title
        this.published = false
    }

    publish(){
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

console.log(eragon)
console.log(eldest)

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book) // Essa fução instanceof verifica se a instância da esquedar pertence à classe da direita.