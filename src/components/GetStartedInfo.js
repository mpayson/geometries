import { useRef, useEffect, useState } from 'react';

import Graphic from '@arcgis/core/Graphic';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';

import { arcgisToGeoJSON, geojsonToArcGIS } from "@terraformer/arcgis";

import { CalciteRadioButtonGroup } from './CalciteComponents';
import { wktToGeoJSON } from '@terraformer/wkt';

const markerSymbol = {
  type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
  color: [226, 119, 40],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 2
  }
};

const lineSymbol = {
  type: "simple-line", // autocasts as SimpleLineSymbol()
  color: [226, 119, 40],
  width: 4
};

const fillSymbol = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: [227, 139, 79, 0.8],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 1
  }
};

function GetStartedInfo({onAddGraphic}){

  const textRef = useRef();
  const [ strFormat, setStrFormat ] = useState('esrijson');

  
  function onAddClick(){
    const value = textRef.current.value;
    let esriJson, geojson;
    if(strFormat === 'esrijson'){
      esriJson = JSON.parse(value);
      geojson = arcgisToGeoJSON(esriJson);
    } else if(strFormat === 'geojson'){
      geojson = JSON.parse(value);
      esriJson = geojsonToArcGIS(geojson);
    } else if(strFormat === 'wkt'){
      geojson = wktToGeoJSON(value);
      esriJson = geojsonToArcGIS(geojson);
    }
    let geometry, symbol;
    switch(geojson.type){
      case 'Polygon':
        geometry = Polygon.fromJSON(esriJson);
        symbol = fillSymbol;
        break;
      case 'Point':
        geometry = Point.fromJSON(esriJson);
        symbol = markerSymbol;
        break;
      default:
        console.log("Unknown type");
    }
    const graphic = new Graphic({geometry, symbol});
    onAddGraphic(graphic);
  }

  return (
    <div style={{width: 'calc(100% - 1rem)', textAlign: 'center', margin: '0.5rem'}}>
      <p>Sketch a graphic to view its properties</p>
      <p><b>OR</b></p>
      <p>Enter in the geometry below</p>
      <hr/>
      <br/>
      <calcite-label>
        Format
        <CalciteRadioButtonGroup name="format" onChange={setStrFormat}>
          <calcite-radio-button checked={strFormat === 'esrijson' || undefined} value="esrijson">Esri JSON</calcite-radio-button>
          <calcite-radio-button checked={strFormat === 'geojson' || undefined} value="geojson">GeoJSON</calcite-radio-button>
          <calcite-radio-button checked={strFormat === 'wkt' || undefined} value="wkt">WKT</calcite-radio-button>
        </CalciteRadioButtonGroup>
      </calcite-label>
      <calcite-label>
          Geometry string
          <calcite-input placeholder="Enter geometry" type="textarea" ref={textRef}></calcite-input>
      </calcite-label>
      <calcite-button width="full" onClick={onAddClick}>Add to map</calcite-button>
    </div>
  )
}

export default GetStartedInfo;