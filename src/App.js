import BlogList from './BlogList';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <BlogList posts={blog.filter((post) => post.id === 2)} title="Second Blog Only" /> */}
      </div>
    </div>
  );
}

export default App;
