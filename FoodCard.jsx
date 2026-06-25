const FoodCard = ({ image, title, price }) => { 
  return ( 
    <div className="food-card"> 
      <img src={image} alt={title} /> 
 
      <div className="food-content"> 
        <h3>{title}</h3> 
 
        <p> 
          Fresh ingredients and delicious taste. 
        </p> 
 
        <h4>£ {price}</h4> 
      </div> 
    </div> 
  ); 
}; 
 
export default FoodCard; 