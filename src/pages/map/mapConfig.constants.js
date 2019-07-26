const CIRCLE_TYPES = {
  FOOD: 'FOOD',
  NIGHT_LIFE: 'NIGHT_LIFE',
  ADVENTURE: 'ADVENTURE',
};

const foodPlaces = {
  strokeColor: 'red',
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: 'red',
  fillOpacity: 1,
};

const nightLife = {
  strokeColor: 'black',
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: 'black',
  fillOpacity: 1,
};

const adventure = {
  strokeColor: 'red',
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: 'green',
  fillOpacity: 0.4,
};

const circleConfigs = {
  [CIRCLE_TYPES.FOOD]: foodPlaces,
  [CIRCLE_TYPES.NIGHT_LIFE]: nightLife,
  [CIRCLE_TYPES.ADVENTURE]: adventure,
};

export {
  CIRCLE_TYPES,
  circleConfigs,
};
