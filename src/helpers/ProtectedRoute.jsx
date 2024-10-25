import Cookies from "universal-cookie"
import * as COOKIES_NAMEs from "./keyCookies";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const cookies = new Cookies();

    const access_token = cookies.get(COOKIES_NAMEs.KEY_TOKEN);    

    if(access_token && access_token != ""){
        console.log("access_token", access_token)
        return children;
    }else{
        return <Navigate to="/admin-panel" />
    }
}

export default ProtectedRoute;