import React from "react";

const LikeDislike = ({ upvotes, downvotes, setUpvotes, setDownvotes }) => {
  return (
    <div>
      <button
        onClick={() => {
          setUpvotes(upvotes + 1);
        }}
      >
        👍{upvotes}
      </button>
      <button
        onClick={() => {
          setDownvotes(downvotes - 1);
        }}
      >
        👎{downvotes}
      </button>
    </div>
  );
};

export default LikeDislike;
