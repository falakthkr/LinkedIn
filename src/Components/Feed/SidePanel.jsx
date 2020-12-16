import React from "react"
import {connect} from "react-redux"

class SidePanel extends React.Component{
    render(){
        const{userData}=this.props
        return(
            <div style={{margin:"40px"}}>
                <div class="card">
                    <img src={userData.avatar} class="img-fluid rounded-circle align-self-center" alt="user" style={{width:"100px",height:"100px",margin:"10px"}} />
                    <div class="card-body">
                        <h5 class="card-title">{userData.username_fullname}</h5>
                        <p class="text-muted" style={{fontSize:"small"}}>{userData.details}</p>
                        <hr />
                        <p style={{fontSize:"small",fontWeight:"bold"}}><span class="text-muted">Connections </span><br />Grow your network <br /> <span class="text-muted">Who viewed your profile</span> </p>
                        <hr />
                        <p style={{color:"gray",fontWeight:"bold",fontSize:"small"}}><i class="fas fa-bookmark"></i> Saved Items</p>
                    </div>
                </div>  
                <div class="card" style={{marginTop:"20px"}}>
                    <div class="card-body">
                        <p>
                            Recents
                        </p>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userData : state.login.userData
})
  
export default connect(mapStateToProps, null)(SidePanel)