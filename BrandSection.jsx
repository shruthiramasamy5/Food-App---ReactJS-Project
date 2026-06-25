import logo1 from "../assets/logos/logo1.png"; 
import logo2 from "../assets/logos/logo2.png"; 
import logo3 from "../assets/logos/logo3.png"; 
import logo4 from "../assets/logos/logo4.jpg"; 
import logo5 from "../assets/logos/logo5.png"; 
import logo6 from "../assets/logos/logo6.png"; 
 
const BrandSection = () => { 
  const logos = [ 
    logo1, 
    logo2, 
    logo3, 
    logo4, 
    logo5, 
    logo6, 
  ]; 
 
  return ( 
    <section className="brand-section"> 
      <h1 className="section-title">Similar Restaurants</h1> 
 
      <div className="brand-grid"> 
        {logos.map((logo, index) => ( 
          <div key={index} className="brand-card"> 
            <img src={logo} alt="Restaurant Logo" /> 
          </div> 
        ))} 
      </div> 
    </section> 
  ); 
}; 
 
export default BrandSection; 