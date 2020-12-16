import React from "react"
import {Route} from "react-router-dom"
import Login from "../Components/Login"
import PrivateRoutes from "../Routes/PrivateRoutes"

const PublicRoutes = () =>{
    return(
        <div>
            <Route path="/" exact render={()=><Login />} />
            <Route path="/feed"  render={()=><PrivateRoutes />} />
        </div>
    )
}

export default PublicRoutes