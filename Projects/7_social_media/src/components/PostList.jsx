import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [datafetched, setDataFetched] = useState(false);

  if (!datafetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      // .then(console.log);
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }

  // const handleGetPostsClicked = () => {};
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage /*getPostsClickPassed={handleGetPostsClicked}*/ />
      )}
      {postList.map((post) => (
        // console.log(post);
        <Post key={post.id} postPassed={post} />
      ))}
    </>
  );
};
export default PostList;
