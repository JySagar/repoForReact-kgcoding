import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // The below true happens just before the fetching of data where we will start the loading icon.
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        // The below false happens after fetching is done i.e. posts are here so we will stop the loading icon.
        setFetching(false);
      });
  }, []);

  // const handleGetPostsClicked = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage /*getPostsClickPassed={handleGetPostsClicked}*/ />
      )}
      {!fetching &&
        postList.map((post) => (
          // console.log(post);
          <Post key={post.id} postPassed={post} />
        ))}
    </>
  );
};
export default PostList;
