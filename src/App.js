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
const sketchLayer = new GraphicsLayer();

function App() {
  
  const viewEl = useRef();
  const mapViewRef = useRef();

  const [ graphic, setGraphic ] = useState();
  const [ strFormat, setStrFormat ] = useState('esrijson');
  const [ wkid, setWkid ] = useState(4326);

  useEffect(function onMount(){

    const map = new Map({
      basemap: 'gray-vector',
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
    view.ui.add(expand, 'top-right');
    view.ui.move('zoom', 'top-right');

    const sketch = new Sketch({
      layer: sketchLayer,
      creationMode: 'update',
      layout: 'vertical',
      view
    });
    view.ui.add(sketch, 'top-left');
  
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

  function onAddGraphic(graphic){
    mapViewRef.current.graphics.add(graphic);
    setGraphic(graphic);
  }

  function onClear(graphic){
    const view = mapViewRef.current;
    view.graphics.removeAll();
    sketchLayer.removeAll();
    setGraphic(undefined);
  }
  
  let panelContent;

  if(graphic){

    const sr = new SpatialReference({wkid});

    const geometry = project(graphic.geometry, sr);

    const propertyDisplay = propertyFnsByType[geometry.type].map(f => 
      <tr key={f.label}>
        <td>{f.label}</td>
        <td>{f.fn(geometry)}</td>
      </tr>
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
            <calcite-button scale="s" width="full" color="red" appearance="outline" onClick={onClear}>Clear geometries</calcite-button>
          </calcite-label>
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
          <table style={{width: '100%'}}> 
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
            {propertyDisplay}
          </table>
        </calcite-block>
      </>
    )
  } else {
    panelContent = <GetStartedInfo onAddGraphic={onAddGraphic}/>;
  }

  return (
    <calcite-shell>
      <calcite-shell-panel slot="primary-panel" position="start" width-scale="m">
      <calcite-action-bar slot="action-bar" theme="dark">
        <calcite-action-group>
          <calcite-action text="Properties" icon="feature-details" active></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
        <calcite-panel heading="Geometry Properties" headingLevel="1" widthScale="l">
          <div>
            {panelContent}
          </div>
        </calcite-panel>
      </calcite-shell-panel>
      <div id="map" ref={viewEl}></div>
    </calcite-shell>
  );
}

export default App;
