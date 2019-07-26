/* eslint-disable no-loop-func */
import React from 'react';
import { Map, createMarker, createCircle } from './utils';
import { CIRCLE_TYPES } from './mapConfig.constants';

import './mapLoader.css';

export default class MapLoader extends React.Component {
  componentDidMount() {
    var tekion = { lat: 12.90657, lng: 77.587147 };
    var jpmetro = { lat: 12.9076, lng: 77.573133 };
    const phuket = { lat: 7.950935, lng: 98.346680 };
    const element = document.getElementById("map1");
    this.map = new Map(element, { zoom: 14, center: tekion });
    const phuketMarker = createMarker(this.map, tekion, '1', 'Abhishek', {});
    // var biggerCircleCenter = {
    //   lat: (tekion.lat + jpmetro.lat)/2,
    //   lng: (tekion.lng + jpmetro.lng)/2,
    // };
  }

  componentDidUpdate() {
    const { data = {} } = this.props;
    for (let type in data) {
      const { destinations, selected } = data[type];
      if (selected) {
        destinations.forEach((obj, i) => {
          const markerKey = `${type}${i + 1}`;
          window.marker = {
            ...window.marker,
            [markerKey]: createCircle({ mapObj: this.map, center: obj, radius: 100, label: i, type }),
          };
        });
      } else {
        for(let type in window.marker) {
          window.marker[type].setMap(null);
        }
      }
    }
      console.log('for in', data, window.marker);
    }

    render() {
      return (
        <div id="map1" style={{ height: "800px", width: "100%" }} />
      );
    }
  }