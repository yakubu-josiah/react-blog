import { Link } from "react-router-dom";

const Navbar = () => {
    // const ClickEvents = (key) => {
    //     alert('You clicked the' + key + ' button');
    // }
    return (
        <nav className="navbar">
            <h1>Welcome to my Blog</h1>
            <div>
                <ul className="links">
                    <Link to="/"> Home </Link>
                    <Link to="/library"> Personal Lib </Link>
                    <Link to="/tools"> Study Tools </Link>
                    <Link to="/more"> Learn More </Link>
                    {/* <li><a href="/show">All Blog Posts</a></li>
                    <li><a href="/more">More</a></li> */}
                </ul>
                
            </div>
            
        </nav>
        
    );
}
 
export default Navbar;