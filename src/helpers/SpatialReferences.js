const spatialReferences = [{
  wkid: 4326,
  label: 'WGS84'
}, {
  wkid: 102100,
  label: 'Web Mercator'
}, {
  wkid: 8857,
  label: 'Equal Earth Greenwich'
}, {
  wkid: 54008,
  label: 'World Sinusoidal'
}, {
  wkid: 54050,
  label: 'World Fuller'
}]

export function getLabelForId(wkid){
  const el = spatialReferences.find(el => el.wkid === wkid);
  return el.label;
}

export default spatialReferences;


