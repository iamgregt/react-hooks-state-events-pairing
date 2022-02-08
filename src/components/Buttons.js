import React, {useState} from "react";

function Buttons({upvotes, downvotes}){
    const [newUpvote, setNewUpvote] = useState(upvotes)
    const [newDownVote, setNewDownVote] = useState(downvotes)

    function handleNewUpVote(){
        setNewUpvote((newUpvote) => {
            return ++newUpvote
        })
    }

    function handleNewDownVote(){
        setNewDownVote((newDownVote) => {
            return ++newDownVote
        })
    }


    return(
        <div>
            <button onClick={handleNewUpVote}>{newUpvote}👍</button><button onClick={handleNewDownVote}>{newDownVote}👎</button>
        </div>
    )
}

export default Buttons