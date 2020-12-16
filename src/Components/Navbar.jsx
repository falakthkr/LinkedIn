import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div class="shadow p-2 bg-white rounded">
                <Link to="/feed"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Logo" style={{width:"30px",marginRight:"30px"}} /></Link>
                <input placeholder="Search" style={{marginTop:"5px",width:"400px"}}/>
                <Link to="/mynetwork"><i class="fas fa-user-friends text-muted" style={{marginLeft:"230px",fontSize:"large"}}></i></Link>
                <Link to="/jobs"><i class="fas fa-briefcase text-muted" style={{marginLeft:"70px",fontSize:"large"}}></i></Link>
                <Link to="/messaging"><i class="fas fa-comment-dots text-muted" style={{marginLeft:"70px",fontSize:"large"}}></i></Link>
                <Link to="/notification"><i class="fas fa-bell text-muted" style={{marginLeft:"70px",fontSize:"large"}}></i></Link>
                <Link to="/profile"><i class="fas fa-user-circle text-muted" style={{marginLeft:"70px",fontSize:"large"}}></i></Link>
            </div>
        )
    }
}

export default Navbar