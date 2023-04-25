const BlogList = ({posts, header}) => {
  return ( 
    <div className="blogListing">
      <h1 className="pt-3">{header}</h1>
      {posts.map((post) => (
                <div className="preview-list" key={post.id}>
                    <h2> {post.title} </h2>
                    <p> This was written by: <span>{ post.author }</span></p>
                </div>
            ))}   
    </div>
  );
}
 
export default BlogList;