class Property{
    #price
    constructor(area, price){
        this.area = area
        this.#price = price
    }

    getPricePerSquareMeter(){
        return this.#price / this.area
    }
}

class House extends Property{
    
}

class Apartament extends Property{
    constructor(number, area, price){
        this.number = number
        super(area, price)
    }
}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(land.getPricePerSquareMeter())
console.log(someHouse)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof House)
