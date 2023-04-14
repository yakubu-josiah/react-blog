const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome to my Blog</h1>
            <div className="links">
                <a href="/" style={{
                    color: "#fff",
                    backgroundColor: "#f1356d",
                    borderRadius: "5px",
                    fontSize: "13px"
                }}>Home</a>
                <a href="/create">Add New Post</a>
                <a href="/show">All Blog Posts</a>
                <a href="/more">More</a>
            </div>
            
        </nav>
        
    );
}
 
export default Navbar;