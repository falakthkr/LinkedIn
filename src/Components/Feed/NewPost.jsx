import React from "react"
import { postPosts } from "../../Redux/LinkedIn Redux/actions"
import {connect} from "react-redux"
import {v4 as uuid} from "uuid"

class NewPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postContent:"",
            id:uuid()
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = () =>{
        const {userData} = this.props
        this.props.postPosts(this.state,userData)
    }
    render(){
        console.log(this.props)
        return(
            <div style={{width:"770px"}}>
                <div style={{marginTop:"40px"}} class="card">
                    <form style={{margin:"10px"}} onSubmit={this.handleSubmit}>
                        <div class="input-group mb-2" style={{border:"1px solid lightgray",borderRadius:"20px"}}>
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-transparent" style={{border:"transparent"}}><i class="fas fa-edit text-muted"></i></div>
                                </div>
                            <textarea style={{border:"transparent"}} name="postContent" type="text" class="form-control" placeholder="Start a post" value={this.state.post} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <span style={{marginRight:"120px"}}><i class="fas fa-image text-primary" style={{fontSize:"large"}}></i><span class="text-muted"> Photo</span></span>
                            <span style={{marginRight:"120px"}}><i class="fab fa-youtube" style={{color:"orange",fontSize:"large"}}></i><span class="text-muted"> Video</span></span>
                            <span style={{marginRight:"120px"}}><i class="fas fa-calendar-times text-muted" style={{fontSize:"large"}}></i><span class="text-muted"> Event</span></span>
                            <span><i class="fas fa-pen-alt" style={{color:"greenyellow",fontSize:"large"}}></i><span class="text-muted"> Write article</span></span>
                        </div>
                        <input class="bg-primary" style={{color:"white",fontWeight:"bold",border:"transparent",borderRadius:"10px",width:"70px"}} type="submit" value="POST" />
                    </form>
                </div>          
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.linkedIn.posts,
    userData : state.login.userData
});
  
const mapDispatchToProps = (dispatch) => ({
    postPosts: (a) => dispatch(postPosts(a))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
