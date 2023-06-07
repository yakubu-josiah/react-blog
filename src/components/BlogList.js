import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({posts, header, blogDelete}) => {
  return ( 
    <div className="blogListing">
      <h1 className="pt-3">{header}</h1>
      {posts.map((post) => (
        <div className="preview-list" key={post.chapter}>
          <div>
            <h2> {post.book} </h2>
            <p> This was written by: <span>{ post.writer }</span></p>
          </div>
          <div className="blogBtn">
            <Link to={`/bible/read-bible-chapter/${post.id}`}>
              <button className="edit">read more &gt;&gt;</button>
            </Link>
            <button className="del" onClick={() => blogDelete(post.id)}>delete &#x2715;</button>
          </div>
        </div>
      ))}   
    </div>
  );
}
 
export default BlogList;