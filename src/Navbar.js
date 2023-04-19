
const Navbar = () => {
    // const ClickEvents = (key) => {
    //     alert('You clicked the' + key + ' button');
    // }
    return (
        <nav className="navbar">
            <h1>Welcome to my Blog</h1>
            <div>
                <ul className="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/create">Add New Blog</a></li>
                    <li><a href="/show">All Blog Posts</a></li>
                    <li><a href="/more">More</a></li>
                </ul>
                
            </div>
            
        </nav>
        
    );
}
 
export default Navbar;