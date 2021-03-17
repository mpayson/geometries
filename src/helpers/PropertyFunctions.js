import { planarArea } from '@arcgis/core/geometry/geometryEngine';

const propertyFnsByType = {
  'polygon': [{
    label: 'Area',
    fn: geometry => planarArea(geometry)
  }],
  'polyline': [],
  'point': []
}

export default propertyFnsByType;