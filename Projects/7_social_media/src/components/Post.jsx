const Post = ({ postPassed }) => {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {postPassed.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {postPassed.reactions}
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
        </h5>
        <p className="card-text">{postPassed.body}</p>
        {postPassed.tags.map((tag) => (
          <span class="badge text-bg-primary hastag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </div>
  );
};

export default Post;
