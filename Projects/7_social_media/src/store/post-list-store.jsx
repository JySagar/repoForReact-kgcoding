import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postIDPassed
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postListFP, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPostFP = (
    userIdCatch,
    postTitleCatch,
    postBodyCatch,
    reactionsCatch,
    tagsCatch
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: postTitleCatch,
        body: postBodyCatch,
        reactions: reactionsCatch,
        userID: userIdCatch,
        tags: tagsCatch,
      },
    });
  };

  const deletePostFP = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postIDPassed: postID },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postListFP,
        addPost: addPostFP,
        deletePost: deletePostFP,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends i am going to Mumbai for my vacations. Hope to enjoy a lot.",
    reactions: 2,
    userID: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ka baad bhi ho gaye hain paas. Hard to believe",
    reactions: 15,
    userID: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
