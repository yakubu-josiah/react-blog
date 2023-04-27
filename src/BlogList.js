const BlogList = ({posts, header, blogDelete}) => {
  return ( 
    <div className="blogListing">
      <h1 className="pt-3">{header}</h1>
      {posts.map((post) => (
                <div className="preview-list" key={post.id}>
                    <h2> {post.title} </h2>
                    <p> This was written by: <span>{ post.author }</span></p>
                    <button className="edit">Edit</button>
                    <button className="del" onClick={() => blogDelete(post.id)}>Delete</button>
                </div>
            ))}   
    </div>
  );
}
 
export default BlogList;