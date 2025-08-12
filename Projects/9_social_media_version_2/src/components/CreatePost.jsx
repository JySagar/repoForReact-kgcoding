import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {};

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          name="reactions"
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hastags here
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
    // body: JSON.stringify({
    //   // id: Date.now,
    //   title: postData.title,
    //   body: postData.body,
    //   reactions: postData.reactions,
    //   userId: postData.userId,
    //   tags: postData.tags,
    //   }),
  })
    .then((res) => res.json())
    .then((postsReceivedObj) => {
      console.log("Got response from server", postsReceivedObj);
      // addPost(postsReceivedObj);
    });

  // previously what navigate was doing now redirect will do the same i.e. after submitting the form i.e. here when return happens then we are redirected to home page.
  return redirect("/");
}

export default CreatePost;
