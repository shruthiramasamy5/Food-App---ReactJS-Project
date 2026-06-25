const reviews = [ 
  { 
    name: "Sarah Johnson", 
    review: "Amazing food and quick delivery.", 
  }, 
  { 
    name: "Michael Brown", 
    review: "Great taste and excellent service.", 
  }, 
  { 
    name: "Emily Davis", 
    review: "Highly recommended restaurant.", 
  }, 
]; 
 
const ReviewSection = () => { 
  return ( 
    <section className="review-section"> 
      <h1 className="section-title">Customer Reviews</h1> 
 
      <div className="review-grid"> 
        {reviews.map((review, index) => ( 
          <div key={index} className="review-card"> 
            <h4>{review.name}</h4> 
            <p>{review.review}</p> 
          </div> 
        ))} 
      </div> 
    </section>
      ); 
}; 
 
export default ReviewSection; 