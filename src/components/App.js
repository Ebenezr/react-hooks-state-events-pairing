import react, { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import LikeDislike from "./LikeDislike.js";
import Starts from "./Starts.js";
import Video from "./Video.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [toggleComments, setToggleComments] = useState(true);

  return (
    <div className="App">
      <Video video={video.embedUrl} title={video.title} />
      <Starts date={video.createdAt} views={video.views} />
      <LikeDislike
        upvotes={upvotes}
        downvotes={downvotes}
        setDownvotes={setDownvotes}
        setUpvotes={setUpvotes}
      />
      <button
        onClick={() => {
          setToggleComments(!toggleComments);
        }}
      >
        {!toggleComments ? "Hide comments" : "Unhide Comments"}
      </button>
      <hr></hr>
      {toggleComments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
