import { planarArea } from '@arcgis/core/geometry/geometryEngine';

const propertyFnsByType = {
  'polygon': [{
    label: 'Area',
    fn: geometry => planarArea(geometry)
  }, {
    label: 'Centroid (X)',
    fn: geometry => geometry.centroid.x
  }, {
    label: 'Centroid (Y)',
    fn: geometry => geometry.centroid.y
  }],
  'polyline': [],
  'point': []
}

export default propertyFnsByType;