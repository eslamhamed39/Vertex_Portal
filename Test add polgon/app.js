
const map = TT.map({
    key: 'YZlbkr2ee2sbGy3dZsWG85VE4mPsibyQ',
    container: 'map',
    center: [0, 0],
    zoom: 2,
    style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${key}`
  });
  
//   fetch("D:/Portal/Geo File/Eslma.kml")
//     .then(response => response.text())
//     .then(kml => {
//       const kmlLayer = new TT.L.KML({
//         content: kml
//       });
  
//       map.addLayer(kmlLayer);
//     })
//     .catch(error => {
//       console.error('Error fetching KML file:', error);
//     });