import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Welcome to my Blog</h1>
            </Link>
            <div>
                <ul className="links">
                    <Link to="/"> Home </Link>
                    <Link to="/library"> Personal Lib </Link>
                    <Link to="/tools"> Study Tools </Link>
                    <Link to="/more"> Learn More </Link>
                </ul>
                
            </div>
            
        </nav>
        
    );
}
 
export default Navbar;