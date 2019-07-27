import React from "react";
import MapLoader from '../map/MapLoader';
import Suggestions from '../Suggestions';
import AppHeader from './AppHeader';
import Legends from '../../organisms/legends';
import { CIRCLE_TYPES } from '../map/mapConfig.constants';
import { fetchData } from './app.services';

import './app.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoords: {},
      data: [],
      openModal: false,
    };
  }

  async componentDidMount() {
    const fetched = await fetchData();
    this.setState({
      data: [
        {
          description: 'Indian Food',
          destinations: [{ lat: 12.90657, lng: 77.587147, name: 'Punjabi Foods' }, { lat: 12.9076, lng: 77.573133, name: 'Andhra Mess' }],
          selected: false,
          type: 'FOOD',
        },
        {
          description: 'Night Life',
          selected: false,
          type: CIRCLE_TYPES.NIGHT_LIFE,
          destinations: [{ lat: 12.9070, lng: 77.580133 }],
        },
      ],
    });
  }

  onSelectCategory = (index) => {
    const { data, selectedCoords } = this.state;
    const { type, selected, destinations } = data[index];
    const newData = data.map((obj, i) => {
      if (index === i) {
        return {
          ...obj,
          selected: !obj.selected,
        };
      }
      return obj;
    });
    const newSelectedCoords = !selected ? { ...selectedCoords, [type]: { destinations, selected: !selected } } : { ...selectedCoords, [type]: { destinations: [], selected: !selected } };
    this.setState({
      data: newData,
      selectedCoords: newSelectedCoords,
    });
  }

  onCircleClick = (type, i) => {
    const { selectedCoords } = this.state;
    const { destinations = [] } = selectedCoords[type];
    const circle = destinations[i] || {};
    this.setState({
      modalInfo: circle.name || '',
      openModal: true,
    });
  }

  closeDialog = () => {
    this.setState({
      openModal: false,
    });
  }

  render() {
    const { data, selectedCoords, openModal, modalInfo } = this.state;
    return (
      <div className="app-container">
        <div className="side-bar">
          <AppHeader />
          <Suggestions data={data} onSelectCategory={this.onSelectCategory} />
        </div>
        <div className="map-bar">
          <MapLoader data={selectedCoords} onCircleClick={this.onCircleClick} />
          <Legends />
        </div>
        {openModal && <div className="modal"> {modalInfo} </div>}
      </div>
    );
  }
}


