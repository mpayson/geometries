import { useRef, useEffect, useState } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Expand from '@arcgis/core/widgets/Expand';
import Search from '@arcgis/core/widgets/Search';
import Sketch from '@arcgis/core/widgets/Sketch';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import { project, load } from '@arcgis/core/geometry/projection';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { arcgisToGeoJSON } from "@terraformer/arcgis";
import { geojsonToWKT } from "@terraformer/wkt";

import GetStartedInfo from './components/GetStartedInfo';
import { CalciteDropdown, CalciteRadioButtonGroup } from './components/CalciteComponents';

import propertyFnsByType from './helpers/PropertyFunctions';
import spatialReferences, { getLabelForId } from './helpers/SpatialReferences';

import './App.css';

load();

function App() {
  
  const viewEl = useRef();
  const mapViewRef = useRef();

  const [ graphic, setGraphic ] = useState();
  const [ strFormat, setStrFormat ] = useState('esrijson');
  const [ wkid, setWkid ] = useState(4326);

  useEffect(function onMount(){

    const sketchLayer = new GraphicsLayer();

    const map = new Map({
      basemap: 'topo-vector',
      layers: [ sketchLayer ]
    });

    const view = new MapView({
      container: viewEl.current,
      center: [-117, 34],
      zoom: 9,
      map
    });

    const expand = new Expand({
      content: new Search({ view }),
      expanded: true,
      view
    });
    view.ui.add(expand, {position: 'top-left', index: 0});

    const sketch = new Sketch({
      layer: sketchLayer,
      creationMode: 'update',
      layout: 'vertical',
      view
    });
    view.ui.add(sketch, 'top-right');
  
    const createListener = sketch.on(['create'], function onCreate(evt){
      if(evt.state !== 'complete') return;
      setGraphic(evt.graphic.clone());
    });

    const updateListener = sketch.on(['update'], function onChange(evt){
      if(evt.state !== 'complete') return;
      setGraphic(evt.graphics[0].clone()); // force react to re-render
    })

    mapViewRef.current = view;

    return function destroy(){
      createListener.remove();
      updateListener.remove();
      if(mapViewRef && mapViewRef.current){
        mapViewRef.current.destroy();
      }
    }

  }, []);
  
  let panelContent;

  if(graphic){

    const sr = new SpatialReference({wkid});

    const geometry = project(graphic.geometry, sr);

    const propertyDisplay = propertyFnsByType[geometry.type].map(f => 
      <p key={f.label}><b>{f.label}: </b>{f.fn(geometry)}</p>
    )

    const esriJson = geometry.toJSON();

    let displayStr;
    if(strFormat === 'esrijson'){
      displayStr = JSON.stringify(esriJson, null, 2);
    } else if(strFormat === 'geojson'){
      const geojson = arcgisToGeoJSON(esriJson);
      displayStr = JSON.stringify(geojson, null, 2);
    } else if(strFormat === 'wkt'){
      const geojson = arcgisToGeoJSON(esriJson);
      const wkt = geojsonToWKT(geojson);
      displayStr = wkt;
    }

    const srItems = spatialReferences.map(s => 
      <calcite-dropdown-item
        active={(s.id === wkid) || undefined }
        key={s.wkid}
        id={s.wkid}>
        {s.label}
      </calcite-dropdown-item>
    )

    panelContent = (
      <>
        <calcite-block heading="Settings"open collapsible>
          <calcite-label>
            Projection
            <CalciteDropdown
              style={{width: '100%'}}
              onSelect={wkidStr => setWkid(parseInt(wkidStr))}>
                <calcite-button
                slot="dropdown-trigger"
                width="full"
                scale="s"
                appearance="outline">
                {getLabelForId(wkid)}
              </calcite-button>
              <calcite-dropdown-group>
                {srItems}
              </calcite-dropdown-group>
            </CalciteDropdown>
          </calcite-label>
        </calcite-block>
        <calcite-block heading="Geometry" summary="String representation" open collapsible>
          <CalciteRadioButtonGroup name="format" onChange={setStrFormat}>
            <calcite-radio-button checked={strFormat === 'esrijson' || undefined} value="esrijson">Esri JSON</calcite-radio-button>
            <calcite-radio-button checked={strFormat === 'geojson' || undefined} value="geojson">GeoJSON</calcite-radio-button>
            <calcite-radio-button checked={strFormat === 'wkt' || undefined} value="wkt">WKT</calcite-radio-button>
          </CalciteRadioButtonGroup>
          <SyntaxHighlighter language="json" style={githubGist} customStyle={{
            // background: "#F3F3F3",
            marginTop: '2px',
            overflow: 'scroll'
          }}>
            {displayStr}
          </SyntaxHighlighter>
        </calcite-block>
        <calcite-block heading="Properties" summary="Calculated values" open collapsible>
          {propertyDisplay}
        </calcite-block>
      </>
    )
  } else {
    panelContent = <GetStartedInfo/>;
  }

  return (
    <div id="container">
      <div id="map" ref={viewEl}></div>
      <div id="side-panel">
        <calcite-panel heading="Geometry Properties" headingLevel="1">
          <div>
            {panelContent}
          </div>
        </calcite-panel>
      </div>
    </div>
  );
}

export default App;
