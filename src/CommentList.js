import useFetch from "./useFetch";

const CommentList = ({ id }) => {
  const { data: comments, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  return (
    <div className="blog-list">
      <h1>Comments : </h1>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      {comments && (
        comments.map((comment,index) => (
        <div className="blog-details" key={comment.id} index={index} >
            <article>
            <h2>{index+1}) { comment.name }</h2>
            <div>{ comment.body }</div>
            <p>Email: { comment.email }</p>
            </article>
        </div>
        ))
      )}
    </div>
  );
}
 
export default CommentList;