import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import Restaurants from "../pages/Restaurants";
import TrackOrder from "../pages/TrackOrder";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/track-order" element={<TrackOrder />} />
    </Routes>
  );
};

export default AppRoutes;