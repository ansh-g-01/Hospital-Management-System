import React from "react";
import "./Body.css"; 
import Doctorimg from "../Assets/body/doctors.png"; 
import design from "../Assets/body/hexagons.png"; 

const Body = () => {
  return (
    <div className="body-container">
      {/* Wrap everything in a relative container */}
      <div className="body-content">
        <div className="text-content">
          <h1>Your Partner in <br/> <span>Health and Wellness</span></h1>
          <p>We are committed to providing you with the best medical and healthcare services.</p>
          <button className="appointment-btn">BOOK AN APPOINTMENT</button>
        </div>

        {/* Doctors Image and Hexagons inside same parent */}
        <div className="image-container">
          <img src={design} alt="Hexagons" className="hexagon-design"/>
          <img src={Doctorimg} alt="Doctors" className="doctor-img"/>
        </div>
      </div>
    </div>
  );
};

export default Body;
