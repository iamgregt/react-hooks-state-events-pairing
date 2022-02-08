import React, {useState} from "react";

function Comment({comments, isHidden}){
    if(!isHidden){
    return(
        <div>
            {comments.map((comment) =>{
                return <>
                <h4>{comment.user}</h4>
                <small>{comment.comment}</small>
                </>
            })}
        </div>
    )
    }else{
        return(
            <></>
        )
    }
}


export default Comment