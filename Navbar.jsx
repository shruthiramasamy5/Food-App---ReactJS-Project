import { Link } from "react-router-dom";
const Navbar = () => { 
  return ( 
    <nav className="navbar"> 
      <div className="logo"> 
        <h1> 
          Order<span>UK</span> 
        </h1> 
      </div> 
 
      <ul className="nav-links"> 
        <li> 
          <Link to="/">Home</Link> 
        </li> 
 
        <li> 
          <Link to="/offers">Special Offers</Link> 
        </li> 
 
        <li> 
          <Link to="/restaurants">Restaurants</Link> 
        </li> 
 
        <li> 
          <Link to="/track-order">Track Order</Link> 
        </li> 
      </ul> 
 
      <button className="login-btn">Login / Signup</button> 
    </nav> 
  ); 
}; 
 
export default Navbar; 