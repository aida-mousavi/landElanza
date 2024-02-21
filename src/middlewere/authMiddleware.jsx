import {Navigate} from "react-router-dom";
import React from "react";

function AuthMiddleware({children}) {
    const auth=localStorage.getItem('token')
    console.log(auth)

    if (auth){
        return (children)
    }
    else {
        console.log('false  '+auth)
        return (<Navigate to="/login" />)
    }

}

export default AuthMiddleware;