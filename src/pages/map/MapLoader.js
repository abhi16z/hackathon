/* eslint-disable no-loop-func */
import React from 'react';
import { Map, createMarker, createCircle } from './utils';

import './mapLoader.css';

export default class MapLoader extends React.Component {
  componentDidMount() {
    var tekion = { lat: 12.90657, lng: 77.587147 }; // init
    const element = document.getElementById("map1");
    this.map = new Map(element, { zoom: 14, center: tekion });
    // const marker = createMarker(this.map, tekion, '1', '', {});
  }

  componentDidUpdate() {
    const { data = {}, onCircleClick } = this.props;
    for (let type in data) {
      const { destinations, selected } = data[type];
      if (selected) {
        destinations.forEach((obj, i) => {
          const markerKey = `${type}${i + 1}`;
          window.marker = {
            ...window.marker,
            [markerKey]: createCircle({ mapObj: this.map, center: obj, radius: 100, label: i, type }),
          };
          window.marker[markerKey].addListener('click', () => onCircleClick(type, i));
        });
      } else {
        for (let type in window.marker) {
          window.marker[type].setMap(null);
        }
      }
    }
  }

  render() {
    return (
      <div id="map1" style={{ height: "800px", width: "100%" }} />
    );
  }
}