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
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        // The below false happens after fetching is done i.e. posts are here so we will stop the loading icon.
        setFetching(false);
      });

    // Below is a cleanup method which calls when this useEffect dies. here for eg : we clicked on create post so home post died so no use of fetching the posts in background so we will pust something here(in return) that stops the fetching.
    return () => {
      console.log("Cleaning up the useEffect.");
      controller.abort();
    };
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
