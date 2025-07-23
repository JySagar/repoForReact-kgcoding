import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      // .then(console.log);
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

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
