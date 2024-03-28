
const btnLogout = document.getElementById('btn_logout');
const btnLogin = document.getElementById('btn_login');
const status = document.querySelector('.status');
const login_Success = document.querySelector('.login_Success');
const redMessage = document.querySelector('.redMessage');
const login_SuccessHome = document.querySelector('.login_SuccessHome');
const success_panel = document.querySelector('.success_panel');
const logoutPage = document.getElementById('logoutPage');
const Home_section = document.getElementById('Home_section');
const loginPage = document.getElementById('loginPage');
const map_section = document.getElementById('map_section');
const home_status = document.getElementById('home_status');

// btn.addEventListener('click',getValue());

// ------------------------------Get Value Function--------------------------------
function getValue() {
    var x = document.getElementById('UserName').value;
    var y = document.getElementById('password').value;
    check(x.toLowerCase(), y.toLowerCase());
}

//------------------------------User account --------------------------------------//
var account = [{
    username: "vertex",
    password: "123",
    namePerson: "Eslam Hamed Kamel",
    idPreson: "240898",
},
{
    username: "eslamhamed39@gmail.com",
    password: "H..e..e",
    namePerson: "omar",
    idPreson: "10925",
}]
var name_id = '';
var isFound = "";
// ------------------------------Check account Function--------------------------------//
function check(user, pass) {
    for (var i = 0; i < account.length; i++) {
        if ((user == account[i].username) && (pass == account[i].password)) {
            name_id = { name: account[i].namePerson, id: account[i].idPreson, cname: account[i].username };
            isFound = true;
        }
    }
    if (isFound == "") {
        isFound = false;
    }
    return action()
}

// ------- sub Function to take Action -------//
function action() {
    if (isFound == true) {
        switchPage();
    }
    else {
        status.innerHTML = 'Wrong username or password';
        time();
    }
}
//----------------------------------Message Function ----------------------------------//

function messageSuccess(status) {
    // login_SuccessHome.innerHTML = status +' Success';
    btnLogin.classList.replace("d-inline-block", "d-none");
    btnLogout.classList.replace("d-inline-block", "d-none");
    home_status.innerHTML = status + ' Success!'
    success_panel.classList.replace("d-none", "d-inline-block");
    time();  //edite

}

// --------------------------Automatic Hide & Clear Function---------------------//
function clear() {
    document.getElementById('password').value = "";
}
function time() {
    setTimeout(() => {
        clear();
        isFound = ''
    }, 1000);
    setTimeout(() => {
        const box = document.querySelector('.status');
        box.innerHTML = '';
        // success_panel.classList.replace("d-inline-block", "d-none");


    }, 4000);
}
function btnTime() {
    setTimeout(() => {
        success_panel.classList.replace("d-inline-block", "d-none");
        checkAfterAction()
    }, 3998);
}
//-------------------- function to Switch login & logout page ----------------------//
function switchPage() {
    loginPage.classList.replace("d-block", "d-none");
    window.location.pathname = "/Home.html";
}

dfgdfgh
//-------------------- Map Part ----------------------//

function mapContent(){
    var api_key = 'YZlbkr2ee2sbGy3dZsWG85VE4mPsibyQ';
    var latAndLong = {lat: 13.965739243442671, lng: 22.219676022819534}; 
    var zoomLevel = 2.2;
    var map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel,
        style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${api_key}`,
        // style: `https://api.tomtom.com/style/1/style/22.2.1-9?key={Your_API_Key}&map=2/basic_street-light&traffic_incidents=2/incidents_light&traffic_flow=2/flow_relative-light&poi=2/poi_light`
    });


    //...
    map.on("load", function () {
        //...
        map.addLayer({
        id: "overlay",
        type: "fill",
        source: {
            type: "geojson",
            data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                [
                    [31.463121345638648, 24.92721487935429],
                    [22.004038451409006, 24.994649117851637],
                    [22.018411483956736, 36.84802038684241],
                    [31.042284929970393, 32.37637391072008],
                ],
                ],
            },
            },
        },
        layout: {},
        paint: {
            "fill-color": "#db356c",
            "fill-opacity": 0.5,
            "fill-outline-color": "black",
        },
        })
    })
  //...











    // Add GeoJSON layer to the map
  
    // var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
     // FOR CUSTOM MARKER
    //var customMarker = document.createElement('div');
    //customMarker.id = 'marker';
    //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);
    // var popupOffsets = {
    //     top: [0, 0],
    //     bottom: [0, 0],
    //     'bottom-right': [0, 0],
    //     'bottom-left': [0, 0],
    //     left: [25, -35],
    //     right: [-25, -35]
    // }
    // var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    // marker.setPopup(popup).togglePopup();
// map.on('click', function(e) {
    //     var lat = e.lngLat.lat;
    //     var lng = e.lngLat.lng;
    //     marker.setLngLat({lat: lat, lng: lng});
    //     popup.setLngLat({lat: lat, lng: lng});
    //

}
