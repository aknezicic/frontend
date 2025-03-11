import React, { useState, useEffect } from "react";
import './Comments.css';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
 
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [postId]);

    return (
        <div className="container comments">
            <h2>Komentari</h2>
            {comments.map((comment) => ( 
                <div key={comment.id} className="mb-3">
                   <h5>{comment.name}</h5>
                    <p>{comment.body}</p>
                    <small>{comment.email}</small>
                </div>
            ))}
        </div>
    );
};

export default Comments;