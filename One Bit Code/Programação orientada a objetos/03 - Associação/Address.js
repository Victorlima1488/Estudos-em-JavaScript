class Address{
    constructor(street, number, neighborhood, city, satate){
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.satate = satate
    }

    fullAddress(){
        return `Rua ${this.street}, nº ${this.number}, ${this.neighborhood}, ${this.city}/${this.satate}.`
    }
}

module.exports = Address