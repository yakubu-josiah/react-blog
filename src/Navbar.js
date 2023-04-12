const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome to my Blog</h1>
            <a href="/">Home</a>
            <a href="/create">Add New Post</a>
            <a href="/show">List of Post</a>
            <a href="/more">More</a>
        </nav>
        
    );
}
 
export default Navbar;