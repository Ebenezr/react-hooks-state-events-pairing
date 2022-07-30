import React from "react";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <span key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
        </span>
      ))}
    </div>
  );
};

export default Comments;
