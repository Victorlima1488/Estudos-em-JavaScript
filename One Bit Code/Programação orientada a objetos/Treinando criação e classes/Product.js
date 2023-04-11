class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(amount){
        this.inStock += amount
    }

    calculateDiscount(percentage){
        percentage /= 100
        let discount = percentage * this.price
        discount = this.price - discount
        return discount
    }
}
const watch = new Product("Relógio de pulso", ". . .", 100)

console.log(watch)

watch.addToStock(12)

console.log(watch)

console.log(watch.calculateDiscount(15))

