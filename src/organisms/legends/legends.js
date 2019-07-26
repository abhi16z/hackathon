import React from 'react';
import './legends.css';

export default function Legends() {
  return(
    <div className="legend-container">
      <div className="individual-legend-container">
        <div className="legend-icon" style={{backgroundColor: 'red'}}/>
        <span> Restaurants </span>
      </div>

      <div className="individual-legend-container">
        <div className="legend-icon" style={{backgroundColor: 'green'}}/>
        <span> Vegetarian Restaurants </span>
      </div>

      <div className="individual-legend-container">
        <div className="legend-icon" style={{backgroundColor: 'black'}}/>
        <span> Night Life </span>
      </div>

      <div className="individual-legend-container">
        <div className="legend-icon" style={{backgroundColor: 'blue'}}/>
        <span> Adventure </span>
      </div>

      <div className="individual-legend-container">
        <div className="legend-icon" style={{backgroundColor: 'violet'}}/>
        <span> Shopping </span>
      </div>
    </div>
  );
}