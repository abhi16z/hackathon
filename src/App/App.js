import React from "react";
import MapLoader from '../map/MapLoader';
import Suggestions from '../Suggestions';
import AppHeader from './AppHeader';

import './app.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app-container">
        <div className="side-bar">
          <AppHeader />
          <Suggestions />
        </div>
        <MapLoader />
      </div>
    );
  }
}
