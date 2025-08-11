import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  // In below line instead of fetching it was initial post before now we brought fetching because it is passed from the store where we transferred useEffect.
  const { postList, fetching } = useContext(PostListData);
  /*
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // The below true happens just before the fetching of data where we will start the loading icon.
    // So below what is happening is : controller is an object(that we created) of the AboutController() class constructor and pulled out two things : one is signal i.e. a listening Object that is connected to the controller and the other is : about() i.e. a funtion which sends a signal "stop" to the controller which then pass it to the signal. so when signal receives stop then fetch function is stopped.
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
  */

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
