import { useReducer } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  // addInitialPosts: () => {},
  // Above is commented out as store took resposibily for adding the initial posts by bringing the useEffect here. So no need to expose it to childrens.
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postIDPassed
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.postsReceived;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postListFP, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPostFP = (
    // userIdCatch,
    // postTitleCatch,
    // postBodyCatch,
    // reactionsCatch,
    // tagsCatch
    postCatched
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: postCatched,
    });
  };

  // Below const renamed from "addInitialPostsFP" to "addInitialPosts" bcoz useEffect is put here from PostList.jsx
  const addInitialPosts = (postsCatch) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        postsReceived: postsCatch,
      },
    });
  };

  const deletePostFP = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postIDPassed: postID },
    });
  };

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

  return (
    <PostList.Provider
      value={{
        postList: postListFP,
        fetching: fetching,
        addPost: addPostFP,
        // addInitialPosts: addInitialPosts,
        deletePost: deletePostFP,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi friends i am going to Mumbai for my vacations. Hope to enjoy a lot.",
//     reactions: 2,
//     userID: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Pass ho bhai",
//     body: "4 saal ki masti ka baad bhi ho gaye hain paas. Hard to believe",
//     reactions: 15,
//     userID: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;
