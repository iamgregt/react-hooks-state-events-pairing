import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}){
    const [commentCount, setCommentCount] = useState(comments.length)
    const [isHidden, setIsHidden] = useState(false)

    function handleCommentCount(){
        setCommentCount((commentCount) => {
           return ++commentCount
        })
    }

    function handleHideComments(){
        setIsHidden(isHidden => !isHidden)
    }

    return(
        <div>
        <button onClick={handleHideComments}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
        <h3 onClick={handleCommentCount}>{commentCount} Comments</h3>
        <Comment comments={comments} isHidden={isHidden} />
        </div>
    )
}

export default CommentList