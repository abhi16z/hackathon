import React from 'react';
import { Map, createMarker, createCircle } from './utils';
import { CIRCLE_TYPES } from './mapConfig.constants';

import './mapLoader.css';

export default class MapLoader extends React.Component {
  componentDidMount() {
    var tekion = { lat: 12.90657, lng: 77.587147 };
    var jpmetro = { lat: 12.9076, lng: 77.573133 };

    const element = document.getElementById("map1");
    const map = new Map(element, { zoom: 14, center: tekion });

    const tekionMarker = createMarker(map, tekion, '1', 'Abhishek');
    const tekionMarker2 = createMarker(map, jpmetro, '2', 'Abhishek');
    const cityCircle = createCircle({mapObj: map, center: jpmetro, radius:Math.sqrt(100 * 100), label: 'JM', type: CIRCLE_TYPES.FOOD});

    var biggerCircleCenter = {
      lat: (tekion.lat + jpmetro.lat)/2,
      lng: (tekion.lng + jpmetro.lng)/2,
    };

    const biggerCircle = createCircle({
      mapObj: map,
      center: biggerCircleCenter,
      radius: Math.sqrt(20000 * 100),
    });
  }

  render() {
    return (
        <div id="map1" style={{ height: "800px", width: "70%" }} />
    );
  }
}