import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <div className="flex flex-col border-2 w-[50%] my-5 mx-auto p-5 justify-center gap-5 bg-slate-400">
      <h1>posts</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li>{post.content}</li>
          <PostAuthor userId={post.userId} />
        </ul>
      ))}
    </div>
  );
};

export default PostList;


