import axios from "axios"
import {
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_POST_REQUEST,
    POST_POST_SUCCESS,
    POST_POST_FAILURE,
    POST_POST_REQUEST,
    POST_COMMENTS_REQUEST,
    POST_COMMENTS_FAILURE,
    POST_COMMENTS_SUCCESS,
    POST_LIKES_REQUEST,
    POST_LIKES_FAILURE,
    POST_LIKES_SUCCESS
} from "./actionTypes"
import {v4 as uuid} from "uuid"

export const getPostsRequest = (payload) => {
    return {
        type:GET_POST_REQUEST,
        payload
    }
}

export const getPostsSuccess = (payload) => {
    return{
        type:GET_POST_SUCCESS,
        payload
    }
}

export const getPostsfailure = (payload) => {
    return{
        type:GET_POST_FAILURE,
        payload
    }
}

export const postPostsRequest = (payload) => {
    return{
        type:POST_POST_REQUEST,
        payload
    }
}

export const postPostsSuccess = (payload) => {
    return{
        type:POST_POST_SUCCESS,
        payload
    }
}

export const postPostsfailure = (payload) => {
    return{
        type:POST_POST_FAILURE,
        payload
    }
}

export const postCommentsFailure = (payload) => {
    return{
        type : POST_COMMENTS_FAILURE,
        payload
    }
}

export const postCommentsRequest = (payload) => {
    return{
        type: POST_COMMENTS_REQUEST,
        payload
    }
}

export const postLikesRequest = (payload) => {
    return{
        type: POST_LIKES_REQUEST,
        payload
    }
}

export const postLikesFailure = (payload) => {
    return{
        type: POST_LIKES_FAILURE,
        payload
    }
}

export const getPosts = (payload) => dispatch => {
    dispatch(getPostsRequest(payload))
    return axios.get("http://localhost:4000/posts")
    .then(res=>dispatch(getPostsSuccess(res.data)))
    .catch(err=>dispatch(getPostsfailure(err)))
}

export const postPosts = (payload) => dispatch => {
    console.log(payload)
    const {userData} = payload
    dispatch(postPostsRequest())
    return axios.post("http://localhost:4000/posts",
    {
        "id": payload.id,
        "avatar": userData.avatar,
        "author_name": userData.username_fullname,
        "author_username": userData.username,
        "body": payload.postContent,
        "likes" : [],
        "comments" : []
    })
    .then(res=>console.log(res))
    .then(res=>dispatch(postPostsSuccess(res.data)))
    .catch(err=>dispatch(postPostsfailure(err)))
}


export const postCommentsSuccess = (payload) => {
    return{
        type : POST_COMMENTS_SUCCESS,
        payload
    }
}

export const postComment = (payload) => dispatch => {
    console.log(payload)
    let {id,body,comments,author} = payload
    comments = [...comments,{id:uuid(),comment_body:body,comment_author:author,timestamp:Date.now()}]
    dispatch(postCommentsRequest())
    return axios.patch("http://localhost:4000/posts/"+id,{
        comments :  comments
    })
    .then(res=>console.log(res))
    .then(res=>dispatch(postCommentsSuccess(res)))
    .then(res=>dispatch(getPosts(res)))
    .catch(err=>dispatch(postCommentsFailure(err)))
    
}

export const postLikesSuccess = (payload) => {
    return{
        type: POST_LIKES_SUCCESS,
        payload
    }
}

export const postLikes = (payload) => dispatch => {
    console.log(payload)
    let {itemID,likes,user_id,username} = payload
    let data = likes.find(item=>item.username == username)
    console.log(data)
    if(!data){
        likes = [...likes,{user_id:user_id,username:username}]
    }
    else{
        likes = likes.filter(like=>like.username!=username)
    }
    dispatch(postLikesRequest())
    return axios.patch("http://localhost:4000/posts/"+itemID,{
        likes:likes
    })
    .then(res=>console.log(res))
    .then(res=>dispatch(postLikesSuccess(res)))
    .then(res=>dispatch(getPosts(res)))
    .catch(err=>dispatch(postLikesFailure(err)))
}
