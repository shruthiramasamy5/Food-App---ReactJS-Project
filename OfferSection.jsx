const offers = [ 
  { 
    id: 1, 
    image: 
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330", 
    title: "First Order Discount", 
  }, 
  { 
    id: 2, 
    image: 
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", 
    title: "Vegan Discount", 
  }, 
  { 
    id: 3, 
     image: 
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc", 
    title: "Free Ice Cream", 
  }, 
]; 
 
const OfferSection = () => { 
  return ( 
    <section className="offers"> 
      {offers.map((offer) => ( 
        <div key={offer.id} className="offer-card"> 
          <img src={offer.image} alt={offer.title} /> 
          <h3>{offer.title}</h3> 
        </div> 
      ))} 
    </section> 
  ); 
}; 
 
export default OfferSection;