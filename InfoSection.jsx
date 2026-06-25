const InfoSection = () => { 
  const features = [ 
    { 
      title: "Delivery Information", 
      text: "Fast and reliable delivery within 20-25 minutes.", 
    }, 
    { 
      title: "Restaurant Information", 
      text: "Serving fresh burgers, fries and drinks every day.", 
    }, 
    { 
      title: "Opening Hours", 
      text: "Monday - Sunday : 8:00 AM - 3:00 AM", 
    }, 
  ]; 
 
  return ( 
    <section className="info-section"> 
      {features.map((item, index) => ( 
        <div key={index} className="info-card"> 
          <h3>{item.title}</h3> 
          <p>{item.text}</p> 
        </div> 
      ))} 
    </section> 
  ); 
}; 
 
export default InfoSection;