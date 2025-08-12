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

  const addPostFP = (postCatched) => {
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
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

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

export default PostListProvider;
