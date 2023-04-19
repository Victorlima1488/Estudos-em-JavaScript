class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Login bem sucedido!")
        }else{
            console.log("Dados colcoados incorretamente.")
        }
    }
}

const Victor = new User("Victor Lima", "limaeriko48@gmail.com", "HelloWorld1234")

Victor.login("limaeriko48@gmail.com", "HelloWorld1234")