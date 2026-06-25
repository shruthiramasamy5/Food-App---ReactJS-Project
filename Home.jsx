import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero"; 
import CategoryTabs from "../components/CategoryTabs"; 
import OfferSection from "../components/OfferSection"; 
import FoodSection from "../components/FoodSection"; 
import InfoSection from "../components/InfoSection"; 
import MapSection from "../components/MapSection"; 
import ReviewSection from "../components/ReviewSection"; 
import BrandSection from "../components/BrandSection"; 
import Footer from "../components/Footer"; 
 
import { burgers, fries, drinks } from "../data/foodData"; 
 
const Home = () => { 
  return ( 
    <> 
      <Navbar /> 
 
      <main className="container"> 
        <Hero /> 
 
        <CategoryTabs /> 
 
        <OfferSection /> 
 
        <FoodSection 
          title="Burgers" 
          items={burgers} 
        /> 
 
        <FoodSection 
          title="Fries" 
          items={fries} 
        /> 
 
        <FoodSection 
          title="Cold Drinks" 
          items={drinks} 
        /> 
 
        <InfoSection /> 
 
        <MapSection /> 
         <ReviewSection /> 
 
        <BrandSection /> 
 
        <Footer /> 
      </main> 
    </> 
  ); 
}; 
 
export default Home;