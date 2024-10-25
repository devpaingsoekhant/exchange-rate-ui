import * as APIs from "./URL";

export const fetchLoginAPI = async(loginData, callback) => {
    return fetch(APIs.LoginAPI,{
        method : "POST",
        headers:  {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: loginData.username,
            password: loginData.password
          })          
    })
        .then((res) => res.json())
        .then((data) => callback(null, data))
        .catch((err) => callback(err, null));
}