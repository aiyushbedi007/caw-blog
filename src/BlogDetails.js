import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const [ comments, setComments] = useState(false);

  const handleClick = () => {
      setComments(true);
  }
  useEffect(() => {
    if(blog){
      document.title = blog.title;
    } 
 }, [blog]);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Load Comments</button>
        </article>
      )}
      { comments && <CommentList id={id} /> }
    </div>
  );
}
 
export default BlogDetails;