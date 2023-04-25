const BlogList = (props) => {
  const blog = props.post;
  return ( 
    <div className="blogListing">
      {blog.map((post) => (
                <div className="preview-list" key={post.id}>
                    <h2> {post.title} </h2>
                    <p> This was written by: <span>{ post.author }</span></p>
                </div>
            ))}   
    </div>
  );
}
 
export default BlogList;