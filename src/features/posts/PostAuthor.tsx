import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { useGetUsersApiByUsersQuery } from "../../api/apiSlice";

const PostAuthor = ({ userId }) => {
  const { data } = useGetUsersApiByUsersQuery("");
  console.log(data);

  const author = data.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
