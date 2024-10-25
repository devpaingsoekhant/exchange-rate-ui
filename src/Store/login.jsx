import { action, makeObservable, observable } from "mobx";
import { fetchLoginAPI } from "../network/FetchData";
import Cookies from "universal-cookie";
import * as COOKIES_NAMEs from "../helpers/keyCookies";

class Login {
    cookies = new Cookies();
    loginFormData = {
        username : "",
        password: ""
    }
    constructor(){
        makeObservable(this,{
            loginFormData: observable,

            _handleLoginFromData: action.bound,
            _handleLoginFormSubmit: action.bound,
            _handleLogout: action.bound,

        });
    }

    _handleLogout= async() =>{
        await this.cookies.remove(COOKIES_NAMEs.KEY_TOKEN);
        window.location.pathname = "/admin-panel";
    }

    _handleLoginFromData(name, value){
        this.loginFormData[name] = value;        
    }

    _handleLoginFormSubmit(){
        if(this.loginFormData.username === ""){
            document.getElementsByName("username").focus();
        }else if(this.loginFormData.password === ""){
            document.getElementsByName("password").focus();
        }else{
            fetchLoginAPI(this.loginFormData, (error, data) => {
                if(data.error === "null"){
                }else{
                    this.cookies.set(COOKIES_NAMEs.KEY_TOKEN, data.payload.access_token);
                    window.location.pathname = "/admin-panel/dashboard";
                }
            })
        }
    }
}

export default new Login();