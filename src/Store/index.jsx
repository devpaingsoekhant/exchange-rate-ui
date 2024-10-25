import login from "./login";
class Store{
    
    login = null;

    constructor(login){
        this.login = login;
    }
}

export default new Store(
    login
);