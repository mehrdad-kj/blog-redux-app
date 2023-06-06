import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import { useGetFakeApiByPostsQuery } from "../../api/apiSlice";
const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const { data } = useGetFakeApiByPostsQuery("");
  console.log(data);



  return (
    <div className="flex flex-col border-2 w-[50%] my-5 mx-auto p-5 justify-center gap-5 bg-slate-400">
      <h1>posts</h1>
      {data?.map((post) => (
        <ul key={post.id}>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li>{post.body}</li>
          <PostAuthor userId={post.userId} />
        </ul>
      ))}
    </div>
  );
};

export default PostList;
