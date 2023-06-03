import { useState } from "react";
import { postAdded } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("first");
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  return (
    <form
      className="flex flex-col border-2 w-[50%] my-5 mx-auto p-5 justify-center gap-5 bg-slate-400"
      onSubmit={handleFormSubmit}
    >
      <h2>Add Post</h2>
      <label htmlFor="title">post title </label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="content">post content </label>
      <input
        type="text"
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        name="users"
        id="users"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value=""></option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <button className="border-2" type="submit" disabled={!canSave}>
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
