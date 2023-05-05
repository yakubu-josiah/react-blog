const BlogList = ({posts, header, blogDelete}) => {
  return ( 
    <div className="blogListing">
      <h1 className="pt-3">{header}</h1>
      {posts.map((post) => (
        <div className="preview-list" key={post.chapter}>
          <h2> {post.book} </h2>
          <p> This was written by: <span>{ post.writer }</span></p>
          <button className="edit">read more &gt;&gt;</button>
          <button className="del" onClick={() => blogDelete(post.chapter)}>delete &#x2715;</button>
        </div>
      ))}   
    </div>
  );
}
 
export default BlogList;