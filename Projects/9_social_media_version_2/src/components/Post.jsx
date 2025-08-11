import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ postPassed }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {postPassed.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(postPassed.id)}
          >
            <AiFillDelete />
            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
        </h5>
        <p className="card-text">{postPassed.body}</p>
        {postPassed.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {postPassed.reactions.likes} Likes and{" "}
          {postPassed.reactions.dislikes} Dislikes people.
        </div>
      </div>
    </div>
  );
};

export default Post;
