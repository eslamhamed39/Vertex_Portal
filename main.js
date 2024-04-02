
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
        setTimeout(function () {
            document.addEventListener('click', clickOutsideDiv1);
        }, 1);
    } else {
        div.style.display = 'none';
        // Remove event listener when div is hidden
        document.removeEventListener('click', clickOutsideDiv1);
    }
}
function clickOutsideDiv1(event) {
    var div = document.querySelector('.list_detection');
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv1);
    }
    else if (div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv1);
    }
}

function toggleDiv3() {
    var div = document.querySelector('.list_detection1');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        // Add event listener to hide div when clicking outside
        setTimeout(function () {
            document.addEventListener('click', clickOutsideDiv2);
        }, 1);
    } else {
        div.style.display = 'none';
        // Remove event listener when div is hidden
        document.removeEventListener('click', clickOutsideDiv2);

    }
}
function clickOutsideDiv2(event) {
    var div = document.querySelector('.list_detection1');
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv2);
        document.getElementById("dropdownUser3").classList.remove('active');
        // document.getElementById("Home").classList.add('active');
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', event => {
                setActive(event.currentTarget.id);
            });
        });

    }
    else if (div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv2);

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

function mapContent() {
    var api_key = 'YZlbkr2ee2sbGy3dZsWG85VE4mPsibyQ';
    var latAndLong = { lat: 4.012114320491342, lng: 21.667170602629522 };
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
        // ~------------------------------------- Pursuing Project layer --------------------------------//
        map.addLayer(globalData);
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
                            [[39.201496256786378, -6.688107122809686], [39.202522027507413, -6.687276290529025], [39.202657791279336, -6.687405001523991], [39.202778470187695, -6.687560271885499], [39.203385978783167, -6.688363182309756], [39.202102394030632, -6.688635585885923], [39.20177875514004, -6.688461247614671], [39.201496256786378, -6.688107122809686]],
                        ]
                    }
                }
            },
            'layout': {},
            'paint': {
                'line-color': '#fff', // Outline color
                'line-width': 2.5 // Outline width
            }
        });
        // !------------------------------------- Zamalek layer --------------------------------//
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
                            [[31.222554993498246, 30.073612485925189], [31.215720180017769, 30.067271695857119], [31.215337430462856, 30.065662774055152], [31.215337430462856, 30.064148470820335], [31.215644997069472, 30.063527363184392], [31.218488279477366, 30.052364507335859], [31.219212769706292, 30.048495370142582], [31.21960918888816, 30.04689797584258], [31.221208535242592, 30.041336476207032], [31.221796329201911, 30.03921829105677], [31.222684854954377, 30.038437272814978], [31.224092826531351, 30.038318936180691], [31.225405110719603, 30.038863283528222], [31.226580698638241, 30.040366140027157], [31.22774261692992, 30.042910293949713], [31.22860380342847, 30.04590402860989], [31.228084357603951, 30.048720186531629], [31.226895100058346, 30.054257608073151], [31.225828869155396, 30.056375471629764], [31.224584933101948, 30.061593031578766], [31.222985586747519, 30.06821810822878], [31.222807881597035, 30.072713443397046], [31.222780542343099, 30.073517850254273], [31.222554993498246, 30.073612485925189]],
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
        map.addLayer({
            'id': 'myOutlineLayer2',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [[31.222554993498246, 30.073612485925189], [31.215720180017769, 30.067271695857119], [31.215337430462856, 30.065662774055152], [31.215337430462856, 30.064148470820335], [31.215644997069472, 30.063527363184392], [31.218488279477366, 30.052364507335859], [31.219212769706292, 30.048495370142582], [31.21960918888816, 30.04689797584258], [31.221208535242592, 30.041336476207032], [31.221796329201911, 30.03921829105677], [31.222684854954377, 30.038437272814978], [31.224092826531351, 30.038318936180691], [31.225405110719603, 30.038863283528222], [31.226580698638241, 30.040366140027157], [31.22774261692992, 30.042910293949713], [31.22860380342847, 30.04590402860989], [31.228084357603951, 30.048720186531629], [31.226895100058346, 30.054257608073151], [31.225828869155396, 30.056375471629764], [31.224584933101948, 30.061593031578766], [31.222985586747519, 30.06821810822878], [31.222807881597035, 30.072713443397046], [31.222780542343099, 30.073517850254273], [31.222554993498246, 30.073612485925189]],
                        ]
                    }
                }
            },
            'layout': {},
            'paint': {
                'line-color': '#fff', // Outline color
                'line-width': 2.5 // Outline width
            }
        });
    })

    // -------------------------------- Hover section  -----------------------//
    map.on('mouseenter', 'Zamalek', function () {
        map.setPaintProperty('Zamalek', 'fill-color', '#b8cdff'); // Change to red fill color on hover
        map.setPaintProperty('myOutlineLayer2', 'line-color', '#182ead'); // Change to red fill color on hover
    });

    // Revert fill color when not hovering over the fill layer
    map.on('mouseleave', 'Zamalek', function () {
        map.setPaintProperty('Zamalek', 'fill-color', '#216bc0'); // Revert to original fill color
        map.setPaintProperty('myOutlineLayer2', 'line-color', '#fff'); // Revert to original fill color
    });
    map.on('mouseenter', 'Project', function () {
        map.setPaintProperty('Project', 'fill-color', '#b8cdff'); // Change to red fill color on hover
        map.setPaintProperty('myOutlineLayer', 'line-color', '#182ead'); // Change to red fill color on hover
    });

    // Revert fill color when not hovering over the fill layer
    map.on('mouseleave', 'Project', function () {
        map.setPaintProperty('Project', 'fill-color', '#216bc0'); // Revert to original fill color
        map.setPaintProperty('myOutlineLayer', 'line-color', '#fff'); // Revert to original fill color
    });

    // var layers = map.getStyle().layers;

    // // Loop through each layer
    // layers.forEach(function(layer) {
    //     // Check if the layer type is 'fill'
    //         var layerId = layer.id;
    //         // Change fill color when hovering over the layer
    //         map.on('mouseenter', layerId, function () {
    //             map.setPaintProperty(layerId, 'fill-color', '#b8cdff'); // Change to red fill color on hover
    //         });
    //         // Revert fill color when not hovering over the layer
    //         map.on('mouseleave', layerId, function () {
    //             map.setPaintProperty(layerId, 'fill-color', '#216bc0'); // Revert to original fill color
    //         });

    // });                                                             
    //.......................................End polygon creation --------------------------------
    // ------------------------------Zoom in Function--------------------------------//
    document.getElementById('Project').addEventListener('click', function () {
        var newCoordinates1 = [39.2022738, -6.6880111];
        var newZoomLevel = 16;
        var duration = 5000;
        map.flyTo({
            center: newCoordinates1,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 45,
            bearing: 0,
        });
    });
    document.getElementById('Home').addEventListener('click', function () {
        var latAndLong = { lat: 4.012114320491342, lng: 21.667170602629522 };
        var newZoomLevel = 2.2;
        var duration = 4000;
        map.flyTo({
            center: latAndLong,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 0,
        });
    });
    document.getElementById('Zamalek').addEventListener('click', function () {
        var newCoordinates3 = [31.221113, 30.058825];
        var newZoomLevel = 13;
        var duration = 5000;
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
        const element1 = document.getElementById("img1");
        const element2 = document.getElementById("img2");
        const element3 = document.getElementById("news");
        element1.setAttribute("src", "../Geo File/Polygon Create/2-2022.jpg")
        element2.setAttribute("src", "../Geo File/Polygon Create/6-2023.jpg")
        element3.setAttribute("src", "../Geo File/Polygon Create/Screenshot.png")
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
            setTimeout(function () {
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
document.querySelector('.scroller').addEventListener('mousedown', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('mouseup', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});
function scrollIt(x) {
    let transform = x
    document.querySelector('.after').style.width = transform + "px";
    document.querySelector('.scroller').style.left = transform - 16 + "px";
}
scrollIt(250);
document.querySelector('.scroller').addEventListener('touchstart', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});



// ---------------------------- Active functions ----------------------------//

function setActive(elementId) {
    // Remove active class from all elements
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the clicked element
    document.getElementById(elementId).classList.add('active');
}

// Add event listeners to all navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        setActive(event.currentTarget.id);
    });
});

// Add event listener to the document body
document.body.addEventListener('click', event => {
    const clickedElement = event.target;
    // Check if the clicked element is not a nav-item or a descendant of a nav-item
    if (!clickedElement.closest('.nav-item') & !document.getElementById("detect").classList.contains("active")) {
        // If clicked element is outside nav-item, make Home active
        setActive('Home');
    }
});


let globalData; // Declare global variable

fetch('./Layer/Pursuing_projects.json')
    .then(response => response.json())
    .then(data => {
        globalData = data;
    })
    .catch(error => console.error('Error fetching JSON:', error));





// *-------------------------- Select options------------------------//
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        const element1 = document.getElementById("img2");
        element1.setAttribute("src", `../Geo File/Polygon Create/${selectedOption}.jpg`)
    });
});

const optionMenu1 = document.querySelector(".select-menu1"),
    selectBtn1 = optionMenu1.querySelector(".select-btn1"),
    options1 = optionMenu1.querySelectorAll(".option1"),
    sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");
selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));

options1.forEach(option1 => {
    option1.addEventListener("click", () => {
        let selectedOption1 = option1.querySelector(".option-text1").innerText;
        sBtn_text1.innerText = selectedOption1;
        optionMenu1.classList.remove("active");
        const element2 = document.getElementById("img1");
        element2.setAttribute("src", `../Geo File/Polygon Create/${selectedOption1}.jpg`)
    });
});