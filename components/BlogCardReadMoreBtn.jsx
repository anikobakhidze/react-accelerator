"use client";
import { useRouter } from "next/navigation";
function BlogCardReadMoreBtn({ id }) {
  const routes = useRouter();
  const handleClick = () => {
    routes.push(`/blogs/${id}`);
  };
  return (
    <button className="text-teal-700 hover:text-teal-500" onClick={handleClick}>
      Read More...
    </button>
  );
}

export default BlogCardReadMoreBtn;
