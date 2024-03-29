
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


// -------------------------- sidebar detection list --------------------//
function toggleDiv() {
    var div = document.querySelector('.list_detection');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        // Add event listener to hide div when clicking outside
        setTimeout(function() {
            document.addEventListener('click', clickOutsideDiv);
        }, 1);
    } else {
        div.style.display = 'none';
        // Remove event listener when div is hidden
        document.removeEventListener('click', clickOutsideDiv);
    }
}
function clickOutsideDiv(event) {
    var div = document.querySelector('.list_detection');
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv);
    }
    else if(div.contains(event.target)){
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv);
    }
}

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
//-------------------- Map Part ----------------------//

function mapContent(){
    var api_key = 'YZlbkr2ee2sbGy3dZsWG85VE4mPsibyQ';
    var latAndLong = {lat: 4.012114320491342, lng: 21.667170602629522};  
    var zoomLevel = 2.2;
    var map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel,
        // ============== style without label name =============//
        style: `https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAVVRVTzI1SHRBR3MxQXRBaDtiYWI4ZjY0Yi1lZDkwLTRjYTEtYTlkYy1mYjcxODIyNzdlMzA=/drafts/0.json`,
        
        // ============== style with label name =============//
        // style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${api_key}`,
    });


//....................................... polygon creation --------------------------------
    map.on("load", function () {
    // ~------------------------------------- Start fill Layer --------------------------------//
        map.addLayer({
        id: "Project",
        type: "fill",
        source: {
            type: "geojson",
            data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                // [
                //     [31.463121345638648, 24.92721487935429],
                //     [22.004038451409006, 24.994649117851637],
                //     [22.018411483956736, 36.84802038684241],
                //     [31.042284929970393, 32.37637391072008],
                // ],
                [[ 39.201496256786378, -6.688107122809686 ], [ 39.202522027507413, -6.687276290529025 ], [ 39.202657791279336, -6.687405001523991 ], [ 39.202778470187695, -6.687560271885499 ], [ 39.203385978783167, -6.688363182309756 ], [ 39.202102394030632, -6.688635585885923 ], [ 39.20177875514004, -6.688461247614671 ], [ 39.201496256786378, -6.688107122809686 ]],
                ],
            },
            },
        },
        layout: {},
        paint: {
            "fill-color": "#216bc0",
            "fill-opacity": 0.4,
            'fill-outline-color': 'white', // Outline color// Outline width    
        },
        });
        // ~------------------------------------- End fill Layer --------------------------------//
        
        // !-------------------------------------Start Out line Layer --------------------------------//
        map.addLayer({
            'id': 'myOutlineLayer',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [[ 31.222639597632419, 30.073602485309159 ], [ 31.216130250453588, 30.067792020004561 ], [ 31.215486629608939, 30.065969058623654 ], [ 31.215369607637186, 30.063918186935926 ], [ 31.216422805382972, 30.060677216650205 ], [ 31.217446747635826, 30.056448603705729 ], [ 31.218090368480475, 30.053485934953077 ], [ 31.219202077212127, 30.04948492536429 ], [ 31.220050486507354, 30.045812970531934 ], [ 31.221249961717838, 30.041533072083258 ], [ 31.221981349041304, 30.039127130826724 ], [ 31.223063802280031, 30.038418000151108 ], [ 31.224321788476384, 30.038392673961692 ], [ 31.225433497208058, 30.038797892215641 ], [ 31.226369672982091, 30.039912233869071 ], [ 31.227422870727878, 30.042470107079687 ], [ 31.228710112417179, 30.044825318070941 ], [ 31.228505323966608, 30.047788245911487 ], [ 31.227569148192572, 30.051991905979083 ], [ 31.226720738897367, 30.054600111379337 ], [ 31.225930840588017, 30.05647392527883 ], [ 31.225316475236312, 30.059537787825029 ], [ 31.224117000025831, 30.063639670219629 ], [ 31.223151568758851, 30.067716063950741 ], [ 31.22280050284359, 30.070855532249638 ], [ 31.222639597632419, 30.073602485309159 ]],
                        ]
                    }
                }
            },
            'layout': {},
            'paint': {
                'line-color': '#0011ff', // Outline color
                'line-width': 2.5 // Outline width
            }
        });
        // !------------------------------------- End Out line Layer --------------------------------//
        map.addLayer({
            id: "Zamalek",
            type: "fill",
            source: {
                type: "geojson",
                data: {
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [
                    // [
                    //     [31.463121345638648, 24.92721487935429],
                    //     [22.004038451409006, 24.994649117851637],
                    //     [22.018411483956736, 36.84802038684241],
                    //     [31.042284929970393, 32.37637391072008],
                    // ],
                    [[ 31.222554993498246, 30.073612485925189 ], [ 31.215720180017769, 30.067271695857119 ], [ 31.215337430462856, 30.065662774055152 ], [ 31.215337430462856, 30.064148470820335 ], [ 31.215644997069472, 30.063527363184392 ], [ 31.218488279477366, 30.052364507335859 ], [ 31.219212769706292, 30.048495370142582 ], [ 31.21960918888816, 30.04689797584258 ], [ 31.221208535242592, 30.041336476207032 ], [ 31.221796329201911, 30.03921829105677 ], [ 31.222684854954377, 30.038437272814978 ], [ 31.224092826531351, 30.038318936180691 ], [ 31.225405110719603, 30.038863283528222 ], [ 31.226580698638241, 30.040366140027157 ], [ 31.22774261692992, 30.042910293949713 ], [ 31.22860380342847, 30.04590402860989 ], [ 31.228084357603951, 30.048720186531629 ], [ 31.226895100058346, 30.054257608073151 ], [ 31.225828869155396, 30.056375471629764 ], [ 31.224584933101948, 30.061593031578766 ], [ 31.222985586747519, 30.06821810822878 ], [ 31.222807881597035, 30.072713443397046 ], [ 31.222780542343099, 30.073517850254273 ], [ 31.222554993498246, 30.073612485925189 ]],
                    ],
                },
                },
            },
            layout: {},
            paint: {
                "fill-color": "#216bc0",
                "fill-opacity": 0.4,
                'fill-outline-color': 'white', // Outline color// Outline width    
            },
            });
    })
//.......................................End polygon creation --------------------------------

 // ------------------------------Zoom in Function--------------------------------//
    document.getElementById('Project').addEventListener('click', function() {
        var newCoordinates1 = [39.2022738,-6.6880111]; 
        var newZoomLevel = 16; 
        var duration = 4000;
        map.flyTo({
            center: newCoordinates1,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 45,
            bearing: 0,
        });
    });
    document.getElementById('Home').addEventListener('click', function() {
        var latAndLong = {lat: 4.012114320491342, lng: 21.667170602629522}; 
        var newZoomLevel = 2.2; 
        var duration = 4000;
        map.flyTo({
            center: latAndLong,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 0,
        });
    });
    document.getElementById('Zamalek').addEventListener('click', function() {
        var newCoordinates3 = [31.221113,30.058825]; 
        var newZoomLevel = 13; 
        var duration = 4000;
        map.flyTo({
            center: newCoordinates3,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 45,
            bearing: 0,
        });
    });

    map.on('click', 'Project', function (e) {
        toggleDiv2();
    });
    map.on('mouseenter', 'Project', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'Project', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('click', 'Zamalek', function (e) {
        toggleDiv2();
        const element1 = document.getElementById("img1");
        const element2 = document.getElementById("img2");
        const element3 = document.getElementById("news");
        element1.setAttribute("src", "../Geo File/Polygon Create/Zamalek/1.jpg")
        element2.setAttribute("src", "../Geo File/Polygon Create/Zamalek/2.jpg")
        element3.setAttribute("src", "../Geo File/Polygon Create/Zamalek/Screenshot.png")
    });
    map.on('mouseenter', 'Zamalek', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'Zamalek', function () {
        map.getCanvas().style.cursor = '';
    });

    function toggleDiv2() {
        var div = document.querySelector('.dialog_detect');
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
            // Add event listener to hide div when clicking outside
            setTimeout(function() {
                document.addEventListener('click', clickOutsideDiv);
            }, 1);
        } else {
            div.style.display = 'none';
            // Remove event listener when div is hidden
            document.removeEventListener('click', clickOutsideDiv);
        }
    }
    function clickOutsideDiv(event) {
        var div = document.querySelector('.dialog_detect');
        if (!div.contains(event.target)) {
            div.style.display = 'none';
            document.removeEventListener('click', clickOutsideDiv);
        }
    }
}


// *=======================================> Slider Comparison imege <===================================//
let active = false;
document.querySelector('.scroller').addEventListener('mousedown',function(){
active = true;
document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
active = false;
document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
active = false;
document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mousemove',function(e){
if (!active) return;
let x = e.pageX;
x -= document.querySelector('.wrapper').getBoundingClientRect().left;
scrollIt(x);
});
function scrollIt(x){
    let transform = x
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-18+"px";
}
scrollIt(150);
document.querySelector('.scroller').addEventListener('touchstart',function(){
active = true;
document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
active = false;
document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
active = false;
document.querySelector('.scroller').classList.remove('scrolling');
});



