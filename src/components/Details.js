import React, {useState} from "react";
import CommentList from "../CommentList";
import Buttons from "./Buttons";

function Details({video}){
    return(
    <div>
        <h1>{video.title}</h1>
        <small>{video.views} Views | Uploaded {video.createdAt}</small>
        <Buttons upvotes={video.upvotes} downvotes={video.downvotes} />
        <CommentList comments={video.comments} />
    </div>
    )
}

export default Details