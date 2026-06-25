import mapImage from "../assets/map/map.png"; 
 
const MapSection = () => { 
  return ( 
    <section className="map-section"> 
      <h1 className="section-title">Location</h1> 
 
      <img 
        src={mapImage} 
        alt="Map" 
        className="map-image" 
      /> 
    </section> 
  ); 
}; 
 
export default MapSection; 