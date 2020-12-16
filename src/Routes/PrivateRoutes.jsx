import React from "react"
import {Redirect,Route} from "react-router-dom"
import {connect} from "react-redux"
import Feed from "../Components/Feed/Feed"

class PrivateRoutes extends React.Component{
    render(){
        const{isAuth} = this.props
        if(isAuth){
            console.log(isAuth)
            return(
                <Route path="/feed" exact component={Feed} />
            )
        }
        else{
            alert("Login")
            return <Redirect to ="/" />
        }
    }
}

const mapStateToProps = state => ({
    isAuth : state.login.isAuth
})

export default connect(
    mapStateToProps,
    null
)(PrivateRoutes)