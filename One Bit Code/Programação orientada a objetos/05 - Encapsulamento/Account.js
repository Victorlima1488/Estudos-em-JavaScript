class Account{

    #balance
    #password

    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password){
        if(this.email === email && this.#password === password){
            return this.#balance
        }
    }

}

const user = {
        email: "limaeriko48@gmail.com",
        password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("limaeriko48@gmail.com", "12346"))

