import FoodCard from "./FoodCard"; 
 
const FoodSection = ({ title, items }) => { 
  return ( 
    <> 
      <h1 className="section-title">{title}</h1> 
 
      <div className="food-grid"> 
        {items.map((item) => ( 
          <FoodCard 
            key={item.id} 
            image={item.image} 
            title={item.title} 
            price={item.price} 
          /> 
        ))} 
      </div> 
    </> 
  ); 
}; 
 
export default FoodSection;