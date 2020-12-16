import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {checkLoginDetails} from "../Redux/Login Redux/actions"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username,password} = this.state
        this.props.checkLoginDetails({username,password})
    }

    render(){
        const {username,password} = this.state
        const {isAuth} = this.props
        if(isAuth){
            return(
                <Redirect to="/feed" />
            )
        }
        console.log(this.props)
        return(
            <div>
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="Logo" style={{width:"120px",marginTop:"20px"}}/>
                <h3>Welcome Back</h3>
                <p style={{color:"grey"}}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username" style={{width:"500px",height:"40px",borderRadius:"5px",border:"1px solid black"}}/>
                    <br />
                    <br />
                    <input type="Password" name="password" value={password} onChange={this.handleChange} placeholder="Password" style={{width:"500px",height:"40px",borderRadius:"5px",border:"1px solid black"}}/>
                    <br />
                    <br />
                    <input type="submit" value="Sign in" style={{border:"transparent",backgroundColor:"#1976d2",width:"500px",height:"40px",borderRadius:"20px",color:"white",fontSize:"medium",fontWeight:"bold"}}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoading : state.login.isLoading,
        isAuth : state.login.isAuth,
        userData : state.login.userData,
        error : state.login.error
    }
}
const mapDispatchToProps = distpatch => {
    return{
        checkLoginDetails : a => distpatch(checkLoginDetails(a))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)