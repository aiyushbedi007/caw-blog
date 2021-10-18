import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect } from "react";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://jsonplaceholder.typicode.com/posts')
  useEffect(() => {
    document.title = "The CAW Blog"
 }, []);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
