import { circleConfigs } from './mapConfig.constants';

export const Map = window.google.maps.Map;
export const Marker = window.google.maps.Marker;
export const InfoWindow = window.google.maps.InfoWindow;

export function createMarker(mapObj, position, label, title, configObject = {}) {
  const { draggable = false, animation = window.google.maps.Animation.DROP } = configObject;
  return new Marker({
    map: mapObj,
    position,
    label,
    title,
    draggable,
    animation,
  });
}

export function createCircle(config = {}) {
  const { mapObj, center, radius, label, type } = config;
  const predefinedConfig = circleConfigs[type] || {};
  const {
    strokeColor = '#EE82EE',
    strokeOpacity = 1,
    strokeWeight = 2,
    fillColor = '#EE82EE',
    fillOpacity = '0.2'
  } = predefinedConfig;

  return new window.google.maps.Circle({
    strokeColor,
    strokeOpacity,
    strokeWeight,
    fillColor,
    fillOpacity,
    map: mapObj,
    center,
    radius,
    label,
  });
}
