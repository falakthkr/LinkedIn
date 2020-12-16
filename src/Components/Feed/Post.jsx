import React from "react"
import { getPosts, postComment, postLikes } from "../../Redux/LinkedIn Redux/actions"
import {connect} from "react-redux"
import {v4 as uuid} from "uuid"

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment : ""
        }
    }

    componentDidMount() {
        this.props.getPosts()
        console.log(this.props)
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleComments = (id,body,comments,author) =>{
        const {postComment} = this.props
        postComment({id,body,comments,author})
        getPosts()
    }

    handleLikes = (itemID,likes) => {
        const{postLikes,userData}=this.props
        const{user_id,username} = userData
        postLikes({itemID,likes,user_id,username})
        getPosts()
    }

    render(){
        const {posts,userData} = this.props
        console.log(posts)
        return(
            <div style={{width:"800px"}} align="left">
                {posts.map((item)=>{
                    console.log(item)
                    let obj = item.likes.find(like=>like.username == userData.username)
                    console.log(obj)
                    return(
                        <div class="card" style={{padding:"10px",margin:"15px"}}>
                            <div class="card-head">
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div><img src={item.avatar} class="align-self-start mr-3 img-fluid rounded-circle" alt="user" style={{width:"50px"}} /></div>
                                    <div style={{marginTop:"7px"}}><h5>{item.author_name}<small>--@{item.author_username}</small></h5></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>{item.body}</p>
                            </div>
                            <button style={{backgroundColor:"transparent",border:"transparent",alignContent:"left"}} onClick={()=>this.handleLikes(item.id,item.likes)}><span style={{color:obj?"red":null,margin:"10px"}}><i class="fas fa-heart" style={{margin:"3px"}}></i></span>{item.likes.length}</button>
                            <div class="card-footer bg-transparent">
                            <input type="text" style={{width:"600px"}} name="comment" value={this.state.comment} onChange={this.handleChange} />
                            <input class="bg-primary" style={{color:"white",fontWeight:"bold",border:"transparent",borderRadius:"10px",width:"100px"}} type="submit" value="COMMENT" onClick={()=>this.handleComments(item.id,this.state.comment,item.comments,userData.username_fullname)} />
                                <hr />
                                <h5>Comments:</h5>
                                {item.comments.map((comments)=>{
                                    return(
                                        <div class="card" style={{padding:"10px",margin:"10px"}}>
                                            <div class="card-title"><h6 class="display-5">{comments.comment_author}</h6>
                                                <p class="text-muted"><small>{comments.timestamp}</small></p>
                                            </div>
                                            <div><p>{comments.comment_body}</p></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.linkedIn.posts,
    userData : state.login.userData
});
  
const mapDispatchToProps = (dispatch) => ({
    getPosts: (a) => dispatch(getPosts(a)),
    postComment : (a) => dispatch(postComment(a)),
    postLikes : (a) => dispatch(postLikes(a))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Post)