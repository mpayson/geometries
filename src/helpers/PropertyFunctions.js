import { planarArea, geodesicLength } from '@arcgis/core/geometry/geometryEngine';
import { arcgisToGeoJSON } from '@terraformer/arcgis';

import centroid from '@turf/centroid';

const propertyFnsByType = {
  polygon: [{
    label: 'Area',
    fn: geometry => planarArea(geometry)
  }, {
    label: 'Geodesic Length',
    fn: geometry => geodesicLength(geometry)
  }, {
    label: 'Centroid (X)',
    fn: geometry => geometry.centroid.x
  }, {
    label: 'Centroid (Y)',
    fn: geometry => geometry.centroid.y
  }, {
    label: 'Min X',
    fn: geometry => {
      const xs = geometry.rings.reduce((acc, ring) => 
        acc.concat(ring.map(coords => coords[0]))
      , []);
      return Math.min(...xs)
    }
  }, {
    label: 'Max X',
    fn: geometry => {
      const xs = geometry.rings.reduce((acc, ring) => 
        acc.concat(ring.map(coords => coords[0]))
      , []);
      return Math.max(...xs)
    }
  }, {
    label: 'Min Y',
    fn: geometry => {
      const xs = geometry.rings.reduce((acc, ring) => 
        acc.concat(ring.map(coords => coords[1]))
      , []);
      return Math.min(...xs)
    }
  }, {
    label: 'Max Y',
    fn: geometry => {
      const xs = geometry.rings.reduce((acc, ring) => 
        acc.concat(ring.map(coords => coords[1]))
      , []);
      return Math.max(...xs)
    }
  }],
  polyline: [{
    label: 'Geodesic Length',
    fn: geometry => geodesicLength(geometry)
  }, {
    label: 'Centroid (X)',
    fn: geometry => {
      const json = geometry.toJSON();
      const geojson = arcgisToGeoJSON(json);
      const lineCentroid = centroid(geojson);
      return lineCentroid.geometry.coordinates[0];
    }
  }, {
    label: 'Centroid (Y)',
    fn: geometry => {
      const json = geometry.toJSON();
      const geojson = arcgisToGeoJSON(json);
      const lineCentroid = centroid(geojson);
      return lineCentroid.geometry.coordinates[1];
    }
  }, {
    label: 'Min X',
    fn: geometry => {
      const xs = geometry.paths.reduce((acc, path) => 
        acc.concat(path.map(coords => coords[0]))
      , []);
      return Math.min(...xs)
    }
  }, {
    label: 'Max X',
    fn: geometry => {
      const xs = geometry.paths.reduce((acc, path) => 
        acc.concat(path.map(coords => coords[0]))
      , []);
      return Math.max(...xs)
    }
  }, {
    label: 'Min Y',
    fn: geometry => {
      const xs = geometry.paths.reduce((acc, path) => 
        acc.concat(path.map(coords => coords[1]))
      , []);
      return Math.min(...xs)
    }
  }, {
    label: 'Max Y',
    fn: geometry => {
      const xs = geometry.paths.reduce((acc, path) => 
        acc.concat(path.map(coords => coords[1]))
      , []);
      return Math.max(...xs)
    }
  }],
  point: [],
  multipoint: [{
    label: 'Centroid (X)',
    fn: geometry => {
      const json = geometry.toJSON();
      const geojson = arcgisToGeoJSON(json);
      const lineCentroid = centroid(geojson);
      return lineCentroid.geometry.coordinates[0];
    }
  }, {
    label: 'Centroid (Y)',
    fn: geometry => {
      const json = geometry.toJSON();
      const geojson = arcgisToGeoJSON(json);
      const lineCentroid = centroid(geojson);
      return lineCentroid.geometry.coordinates[1];
    }
  }, {
    label: 'Min X',
    fn: geometry => {
      const xs = geometry.points.map(p => p[0])
      return Math.min(...xs)
    }
  }, {
    label: 'Max X',
    fn: geometry => {
      const xs = geometry.points.map(p => p[0])
      return Math.max(...xs)
    }
  }, {
    label: 'Min Y',
    fn: geometry => {
      const xs = geometry.points.map(p => p[1])
      return Math.min(...xs)
    }
  }, {
    label: 'Max Y',
    fn: geometry => {
      const xs = geometry.points.map(p => p[1])
      return Math.max(...xs)
    }
  }]
}

export default propertyFnsByType;