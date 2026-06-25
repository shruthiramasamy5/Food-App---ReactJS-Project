import heroBurger from "../assets/hero/hero_burger.jpg"; 
 
const Hero = () => { 
  return ( 
    <section className="hero"> 
      <div className="hero-left"> 
        <p>I'm lovin' it!</p> 
 
        <h1>McDonald's East London</h1> 
 
        <div className="hero-info"> 
          <span>Minimum Order £12</span> 
          <span>Delivery in 20-25 Minutes</span> 
        </div> 
 
        <button>Open Until 3:00 AM</button> 
      </div>
       <div className="hero-right"> 
        <img src={heroBurger} alt="Burger" /> 
      </div> 
    </section> 
  ); 
}; 
 
export default Hero; 
