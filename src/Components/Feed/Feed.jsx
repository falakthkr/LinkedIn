import React from "react"
import Navbar from "../Navbar"
import NewPost from "./NewPost"
import News from "./News"
import Post from "./Post"
import SidePanel from "./SidePanel"

class Feed extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div align="center" style={{display:"flex"}}>
                    <div style={{flex:1}}>
                        <SidePanel />
                    </div>
                    <div style={{flex:1}}>
                        <NewPost />
                        <hr />
                        <Post />
                    </div>
                    <div style={{flex:1}}>
                        <News />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed