
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
const image_date_right = document.getElementById('image_date_right');
const Home_btn = document.getElementById('Home');
const image_date_left = document.getElementById('image_date_left');
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
const optionMenu1 = document.querySelector(".select-menu1"),
    selectBtn1 = optionMenu1.querySelector(".select-btn1"),
    options1 = optionMenu1.querySelectorAll(".option1"),
    sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");
const satelite_Image = document.querySelector(".wrapper");

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
    // console.log(x);
    var y = document.getElementById('password').value;
    // console.log(y);
    check(x.toLowerCase(), y.toLowerCase());
}

//------------------------------User account --------------------------------------//

var name_id = '';
var isFound = "";
// ------------------------------Check account Function--------------------------------//
function check(user, pass) {
    const account = {
        username: "vertex",
        password: "123",
    }
    // for (var i = 0; i < account.length; i++) {
    if ((user == account.username) && (pass == account.password)) {
        // name_id = { name: account[i].namePerson, id: account[i].idPreson, cname: account[i].username };
        isFound = true;
        console.log("Check Done");

    }
    // }
    if (isFound == "") {
        isFound = false;
    }
    return action()
}

// ------- sub Function to take Action -------//
function action() {
    if (isFound == true) {
        console.log(isFound);
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
    // window.location.pathname = "http://85.31.237.210:8080/portal_v1/Home.html";
}
//-------------------- Map Part ----------------------//


// !---------------------- Fetch the GeoJSON data ----------------------//

let layer;
let layer_outline;

async function Refetch(layerID, status) {
    await fetch(`./Layer/${layerID}.json`)
        .then(response => response.json())
        .then(data => {
            layer = data;
        })

    await fetch(`./Layer/${layerID}_outline.json`)
        .then(response => response.json())
        .then(data => {
            layer_outline = data;
        })
    if (status == "Show") {
        Crop_Health['paint']['fill-opacity'] = 0.4;
        Crop_Health_outline['paint']['line-width'] = 3;
    }
    else if (status == "Hide") {
        Crop_Health['paint']['fill-opacity'] = 0;
        Crop_Health_outline['paint']['line-width'] = 'none';
    }
    // response();
}
// function response(){
//     console.log(Crop_Health);
// }






function mapContent() {
    var api_key = 'YZlbkr2ee2sbGy3dZsWG85VE4mPsibyQ';
    var latAndLong = { lat: 4.012114320491342, lng: 21.667170602629522 };
    var zoomLevel = 2.2;
    var map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel,
        // ================= style without label name =================//
        style: `https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAVVRVTzI1SHRBR3MxQXRBaDtiYWI4ZjY0Yi1lZDkwLTRjYTEtYTlkYy1mYjcxODIyNzdlMzA=/drafts/0.json`,
    });
    const layerID_use = ["Project", "Project_outline", "Forest_Logging_Detection", "Forest_Logging_Detection_outline", "Land_Cover", "Land_Cover_outline", "Squatters_Camps", "Squatters_Camps_outline", "Land_Use", "Land_Use_outline", "Azuri_Towers_Nigeria", "Azuri_Towers_Nigeria_outline", "TATU_CITY_KENYA", "TATU_CITY_KENYA_outline", "Crop_Classification", "Crop_Classification_outline", "Mining_Monitoring", "Mining_Monitoring_outline", "Oil_Spill_Detection", "Oil_Spill_Detection_outline", "Wildfires", "Wildfires_outline", "Crop_Disease_Detection", "Crop_Disease_Detection_outline", "Crop_Health", "Crop_Health_outline"]

    function removeAllSourceLayers(map) {
        var mapLayers = map.getStyle().layers;
        mapLayers.forEach(function (layer) {
            var layerId = layer.id;
            if (layer.source && layerID_use.includes(layerId)) {
                var sourceId = layer.source;
                map.removeLayer(layerId);
                map.removeSource(sourceId);
                // console.log(layer.id)
                // console.log(typeof(sourceId))
            }
        });
    }

    //....................................... polygon creation --------------------------------
    function removeListleft() {
        // Get the <ul> element
        var ul = document.getElementById("image_date_left");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
    function removeListright() {
        // Get the <ul> element
        var ul = document.getElementById("image_date_right");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
    // ~------------------------------------- Pursuing Project layer --------------------------------//
    const forest_Logging = document.getElementById("Forest_Logging_Detection");
    const Tanzania_Mega_Mall = document.getElementById("Project");
    const land_cover = document.getElementById("land_cover");
    const land_Use = document.getElementById("Land_Use");
    const squatters_camps = document.getElementById("Squatters_Camps");
    const azuri_Towers_Nigeria = document.getElementById("Azuri_Towers_Nigeria");
    const tATU_CITY_KENYA = document.getElementById("TATU_CITY_KENYA");
    const crop_Classification = document.getElementById("Crop_Classification");
    const mining_Monitoring = document.getElementById("Mining_Monitoring");
    const oil_Spill_Detection = document.getElementById("Oil_Spill_Detection");
    const wildfires = document.getElementById("Wildfires");
    const crop_Disease_Detection = document.getElementById("Crop_Disease_Detection");
    const crop_Health = document.getElementById("Crop_Health");

    

    // ^-------------------------- Monitoring Projects -------------------------//
    Tanzania_Mega_Mall.addEventListener("click", async function () {
        await Refetch("Buildings_Detection")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });


    // ^-------------------------- Forest_Logging_Detection -------------------------//
    forest_Logging.addEventListener("click", async function () {
        await Refetch("Forest_Logging_Detection")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^--------------------------------- Land cover ----------------------------//
    land_cover.addEventListener("click", async function () {
        await Refetch("Land_Cover")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^-------------------------- Squatters Camps ----------------------------//
    squatters_camps.addEventListener("click", async function () {
        await Refetch("Squatters_Camps")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Land Use -----------------------------//
    land_Use.addEventListener("click", async function () {
        await Refetch("Land_Use")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Azuri Towers Nigeria -----------------------------//
    azuri_Towers_Nigeria.addEventListener("click", async function () {
        await Refetch("Azuri_Towers_Nigeria")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- TATU CITY KENYA -----------------------------//
    tATU_CITY_KENYA.addEventListener("click", async function () {
        await Refetch("TATU_CITY_KENYA")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Crop Classification -----------------------------//
    crop_Classification.addEventListener("click", async function () {
        await Refetch("Crop_Classification")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });
    // ^---------------------------------- Mining Monitoring -----------------------------//
    mining_Monitoring.addEventListener("click", async function () {
        await Refetch("Mining_Monitoring")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Oil Spill Detection -----------------------------//
    oil_Spill_Detection.addEventListener("click", async function () {
        await Refetch("Oil_Spill_Detection")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Wildfires Detection -----------------------------//
    wildfires.addEventListener("click", async function () {
        await Refetch("Wildfires")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Crop_Disease_Detection -----------------------------//
    crop_Disease_Detection.addEventListener("click", async function () {
        await Refetch("Crop_Disease_Detection")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Crop_Health -----------------------------//
    crop_Health.addEventListener("click", async function () {
        await Refetch("Crop_Health")
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
        await map.addLayer(layer);
        await map.addLayer(layer_outline);
    });

    // ^---------------------------------- Home -----------------------------//

    Home_btn.addEventListener("click",function () {
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
    });



    // const Detection_services = document.getElementById("Detection_services");
    // Detection_services.addEventListener("click", function () {
    //     map.removeLayer(globalvar);
    //     map.removeLayer(`${globalvar}_outline`);
    //     console.log(globalvar);
    // });

    // document.body.addEventListener("click", function (event) {
    //         if (event.target == tATU_CITY_KENYA && 
    //             event.target == crop_Classification &&
    //             event.target == mining_Monitoring) {
    //             // If clicked outside, remove layers
    //             // map.removeLayer(layer);
    //     }
    // });





    // Add a click event listener to the document body
    // document.body.addEventListener("click", function (event) {
    //     if (event.target == tATU_CITY_KENYA && 
    //         event.target == crop_Classification &&
    //         event.target == mining_Monitoring) {
    //         // If clicked outside, remove layers
    //         removeLayers();
    //     }
    // });






    //  Todo: this function to remove layer when i press anywhere out layer but not working untile now //
    // document.body.addEventListener("click", function (event) {
    //     // Check if the clicked element is not the land_cover element
    //     if (event.target !== land_cover) {
    //         // Remove the land cover layers if they are added
    //         if (map.getLayer(Land_Cover)) {
    //             map.removeLayer(Land_Cover);
    //         }
    //         if (map.getLayer(Land_Cover_outline)) {
    //             map.removeLayer(Land_Cover_outline);
    //         }
    //     }
    // });

    // -------------------------------- Hover section -----------------------//
    function addHoverEffect(layerId) {
        map.on('mouseenter', layerId, function () {
            map.setPaintProperty(layerId, 'fill-color', '#b8cdff'); // Change fill color on hover
            if ('#fff') {
                map.setPaintProperty(layerId + '_outline', 'line-color', '#182ead'); // Change outline color on hover
            }
        });
        // Add mouseleave event listener to revert the changes
        map.on('mouseleave', layerId, function () {
            // Revert fill color
            map.setPaintProperty(layerId, 'fill-color', '#216bc0'); // Original fill color
            if ('#182ead') {
                // Revert outline color
                map.setPaintProperty(layerId + '_outline', 'line-color', '#fff'); // Original outline color
            }
        });
    }
    addHoverEffect('Land_Cover');
    addHoverEffect('Land_Use');
    addHoverEffect('Project');
    addHoverEffect('Forest_Logging_Detection');
    addHoverEffect('Squatters_Camps');
    addHoverEffect('Azuri_Towers_Nigeria');
    addHoverEffect('TATU_CITY_KENYA');
    addHoverEffect('Crop_Classification');
    addHoverEffect('Mining_Monitoring');
    addHoverEffect('Oil_Spill_Detection');
    addHoverEffect('Wildfires');
    addHoverEffect('Crop_Disease_Detection');
    addHoverEffect('Crop_Health');

    //--------------------------------- End polygon creation --------------------------------//
    function handleMapClick(id, newCoordinates, newZoomLevel, angle) {
        document.getElementById(id).addEventListener('click', function () {
            var duration = 5000;
            map.flyTo({
                center: newCoordinates,
                zoom: newZoomLevel,
                duration: duration,
                pitch: angle,
                // bearing: 0,
            });
            removeListleft();
            removeListright();
        });
    }
    handleMapClick('Home', [21.667170602629522, 4.012114320491342], 2.2, 0);
    handleMapClick('Forest_Logging_Detection', [25.13647, 0.47325], 13, 45);
    handleMapClick('land_cover', [-5.6402, 35.2132], 9, 45);
    handleMapClick('Project', [39.2022738, -6.6880111], 16, 45);
    handleMapClick('Land_Use', [16.415, 27.525], 4.8, 45);
    handleMapClick('Squatters_Camps', [31.0187547, -29.8457573], 18, 45);
    handleMapClick('Azuri_Towers_Nigeria', [3.4063485, 6.4027519], 18, 45);
    handleMapClick('TATU_CITY_KENYA', [36.8897801, -1.1556409], 16, 45);
    handleMapClick('Crop_Classification', [37.934, 0.927], 5.5, 45);
    handleMapClick('Mining_Monitoring', [39.379219, -7.161839], 15, 45);
    handleMapClick('Oil_Spill_Detection', [34.986951, 29.527043], 13, 45);
    handleMapClick('Wildfires', [4.82700, 36.69667], 9, 45);
    handleMapClick('Crop_Disease_Detection', [35.25887, -0.38983], 13, 45);
    handleMapClick('Crop_Health', [36.05687, -0.23038], 13, 45);

    // !------------- change pointer and after click  appear popup --------------------//


    // ~============================== Mouse pointer =============================//
    function setCursor(layerId) {
        map.on('mouseenter', layerId, function () {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', layerId, function () {
            map.getCanvas().style.cursor = '';
        });
    }

    // Usage
    setCursor('Project');
    setCursor('Forest_Logging_Detection');
    setCursor('Land_Cover');
    setCursor('Land_Use');
    setCursor('Squatters_Camps');
    setCursor('Azuri_Towers_Nigeria');
    setCursor('TATU_CITY_KENYA');
    setCursor('Crop_Classification');
    setCursor('Mining_Monitoring');
    setCursor('Oil_Spill_Detection');
    setCursor('Wildfires');
    setCursor('Crop_Disease_Detection');
    setCursor('Crop_Health');





    // &======================== click and appear popup ========================//

    const element1 = document.getElementById("img_left");
    const element2 = document.getElementById("img_right");
    const element3 = document.getElementById("news");
    const element4 = document.getElementById("url_news");
    const element6 = document.querySelector(".parchart");
    const element7 = document.querySelector(".piechart");
    const element8 = document.getElementById("dashbord_img1");
    const element9 = document.getElementById("dashbord_img2");
    const element10 = document.getElementById("dashbord_img3");
    const dialog_detect = document.getElementById("dialog_detect");

    //  ?-----==============  Forest Logging Detection ===============-----------//
    map.on('click', 'Forest_Logging_Detection', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Data/Forest_Logging_Detection/6-1-2023.jpg")
        element2.setAttribute("src", "../Data/Forest_Logging_Detection/10-3-2024.jpg")
        element3.setAttribute("src", "../Geo File/Polygon Create/Forest_Logging_News.png")
        element8.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/11.png")
        element9.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/13.png")
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "255px";
        satelite_Image.style.height = "400px";
        element3.style.display = "block";
        element3.style.height = "135px";
        element8.style.height = "285px"
        element4.setAttribute("href", "https://www.lifegate.com/congo-basin-rainforest-logging")
        sBtn_text.innerText = "10-3-2024";
        dialog_detect.style.width = "1250px";
        sBtn_text1.innerText = "6-1-2023";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        removeListleft();
        removeListright();
    });

    //  ?-----------==============  Land cover ===============-----------//
    map.on('click', 'Land_Cover', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/land-C-S-image-2018.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/land-C-S-image-2023.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Screenshot.png");
        element8.setAttribute("src", "../Geo File/Polygon Create/land.C.barchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/land.C.Chart.2015.jpg");
        element10.setAttribute("src", "../Geo File/Polygon Create/land.C.Chart.2020.jpg");
        element3.style.display = "none";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        satelite_Image.style.height = "549px";
        sBtn_text.innerText = "2023";
        sBtn_text1.innerText = "2018";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.thecitizen.co.tz/tanzania/news/national/mwanza-gets-ready-for-mega-mall-2533096");
        removeListleft();
        removeListright();
    });

    //  ?-----------==============  Land use ===============-----------//
    map.on('click', 'Land_Use', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Libya_satelliteImage1.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Land-use-image1.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Screenshot.png");
        element8.setAttribute("src", "../Geo File/Polygon Create/Land-use-barchart1.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Land-use-barchart2.jpg");
        element3.style.display = "none";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "549px";
        sBtn_text.innerText = "Land Use";
        sBtn_text1.innerText = "satellite Image";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        removeListleft();
        removeListright();
    });

    //  ?-----------==============  Crop_Classification ===============-----------//
    map.on('click', 'Crop_Classification', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Crop_Classification_satelliteImage.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Crop_Classification_Classification.png");
        element8.setAttribute("src", "../Geo File/Polygon Create/Crop_Classification_parchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Crop_Classification_piechart.jpg");
        element3.style.display = "none";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "549px";
        sBtn_text.innerText = "Classification";
        sBtn_text1.innerText = "Satellite Image";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        removeListleft();
        removeListright();
    });

    //  ?-----------============== Azuri_Towers_Nigeria ===============-----------//
    map.on('click', 'Azuri_Towers_Nigeria', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Azuri_Towers_Nigeria-5-2016.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Azuri_Towers_Nigeria-2-2024.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Azuri_Towers_Nigeria-new.png");
        element8.setAttribute("src", "../Geo File/Polygon Create/Azuri_Towers_Nigeria-barchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Azuri_Towers_Nigeria-pointchart.jpg");
        element3.style.display = "block";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "2-2024";
        sBtn_text1.innerText = "5-2016";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.itbng.com/azuri-peninsula-eko-atlantic-city-lagos");
        removeListleft();
        removeListright();
    });

    //  ?-----------============== TATU_CITY_KENYA ===============-----------//
    map.on('click', 'TATU_CITY_KENYA', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/TATU_CITY_KENYA-12-2017.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/TATU_CITY_KENYA-2-2024.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/TATU_CITY_KENYA-News.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/TATU_CITY_KENYA-Barchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/TATU_CITY_KENYA-pointchart.jpg");
        element3.style.display = "block";
        element3.style.height = "135px";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "2-2024";
        sBtn_text1.innerText = "12-2017";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://nellions.co.ke/blog/upcoming-residential-estates-nairobi/#9-Tatu-City");
        removeListleft();
        removeListright();
    });

    //  ?-----------============== Crop_Health ===============-----------//
    map.on('click', 'Crop_Health', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-21-5-2022.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-21-5-2022 NDVI.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-News.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-Digram1.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-Digram2.jpg");
        element3.style.display = "block";
        element3.style.height = "135px";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "21-5-2022 NDVI";
        sBtn_text1.innerText = "21-5-2022";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.usaid.gov/kenya/agriculture-food-and-water-security");
        removeListleft();
        removeListright();
    });


    //  ?-----------============== Crop_Disease_Detection ===============-----------//
    map.on('click', 'Crop_Disease_Detection', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Crop_Disease_Detection_Satellite-image.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Crop_Disease_Detection.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Crop_Disease_Detection-News.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/Crop_Disease_Detection-Circelchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Crop_Disease_Detection-Linechart.jpg");
        element3.style.display = "block";
        element3.style.height = "135px";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "Crop Disease Detection";
        sBtn_text1.innerText = "Satellite Image";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.downtoearth.org.in/news/agriculture/savage-mode-in-a-warmer-wetter-world-pests-are-multiplying-faster-and-damaging-crops-severely-91049");
        removeListleft();
        removeListright();
    });

    //  ?-----------============== Oil_Spill_Detection ===============-----------//
    map.on('click', 'Oil_Spill_Detection', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-29-6-2022.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-18-8-2022.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-news.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-parchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-pointchart.jpg");
        element3.style.display = "block";
        element3.style.height = "130px";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "18-8-2022";
        sBtn_text1.innerText = "29-6-2022";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://enterprise.press/greeneconomys/when-oil-washed-up-on-dahabs-shores-local-residents-jumped-into-action/");
        removeListleft();
        removeListright();
    });

    //  ?-----------============== Wildfires_Detection ===============-----------//
    map.on('click', 'Wildfires', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Wildfires-23-7-2023.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Wildfires-29-3-2024.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Wildfires-News.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/Wildfires-barchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Wildfires-saidebarchart.jpg");
        element3.style.display = "block";
        element3.style.height = "130px";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "29-3-2024";
        sBtn_text1.innerText = "23-7-2023";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = '300px';
        image_date_right.style.height = '300px';
        element4.setAttribute("href", "https://www.thenationalnews.com/world/2023/07/26/horrors-of-wildfires-from-space-satellite-photos-track-blazes-in-europe-and-north-africa/");
        removeListleft();
        removeListright();
    });

    //  ?-----------============== Mining Monitoring ===============-----------//
    map.on('click', 'Mining_Monitoring', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Mining_Monitoring-7-2013.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Mining_Monitoring-6-2022.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Mining_Monitoring_news.jpg");
        element8.setAttribute("src", "../Geo File/Polygon Create/Mining_Monitoring-barchart.jpg");
        element9.setAttribute("src", "../Geo File/Polygon Create/Mining_Monitoring-circalchart.jpg");
        element3.style.display = "block";
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        element7.style.height = "272px";
        element8.style.height = "272px";
        element3.style.height = "130px";
        satelite_Image.style.height = "400px";
        sBtn_text.innerText = "2-2024";
        sBtn_text1.innerText = "12-2017";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.digest.tz/ongoing-struggle-with-small-scale-mining-threating-environment/");
        removeListleft();
        removeListright();
    });


    //  ?-----==================  Monitoring Projects ===============-----------//
    map.on('click', 'Project', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/2-2022.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/6-2023.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Screenshot.png");
        element8.setAttribute("src", "/Dashbord/3.png");
        element9.setAttribute("src", "/Dashbord/4.png");
        element10.setAttribute("src", "/Dashbord/6.png");
        element6.style.display = 'block';
        element3.style.display = "block";
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "60%";
        element7.style.height = "245px";
        sBtn_text.innerText = "6-2023";
        sBtn_text1.innerText = "2-2022";
        element8.style.height = "292px"
        satelite_Image.style.height = "400px";
        dialog_detect.style.width = "1250px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.thecitizen.co.tz/tanzania/news/national/mwanza-gets-ready-for-mega-mall-2533096");
        removeListleft();
        removeListright();
    });

    //  ?----------==================  Squatters Camps ===============-----------//

    map.on('click', 'Squatters_Camps', function (e) {
        toggleDiv2();
        element1.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps-1-2020.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps-12-2022.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps_new.jpg");
        element8.setAttribute("src", "");
        element9.setAttribute("src", "");
        element10.setAttribute("src", "");
        element6.style.display = 'block';
        element3.style.display = "block";
        element8.style.display = "none";
        element9.style.display = "none";
        element10.style.display = "none";
        element3.style.height = "140px";
        element7.style.width = "60%";
        dialog_detect.style.width = "730px";
        element7.style.height = "245px";
        sBtn_text.innerText = "12-2022";
        sBtn_text1.innerText = "1-2020";
        element8.style.height = "292px";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        satelite_Image.style.height = "400px";
        element4.setAttribute("href", "https://www.sciencephoto.com/media/182797/view/squatter-camp");
        removeListleft();
        removeListright();
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
            // Buildings_Detection['paint']['fill-opacity'] = 0;
            // fetchBuildings_Detection();
            // Buildings_Detection_outline['paint']['line-width'] = none;
            // removeLayers();
            // console.log(Buildings_Detection)
        }
    }
    map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point);
        globalvar = features["0"].layer["id"];
        // getLayerId();
        linkedImageWithSelect(globalvar);
    });
    // function removeLayers() {
    //     map.removeLayer('TATU_CITY_KENYA');
    //     map.removeLayer('TATU_CITY_KENYA_outline');
    //     map.removeLayer('Crop_Classification');
    //     map.removeLayer('Crop_Classification_outline');
    //     map.removeLayer('Mining_Monitoring');
    //     map.removeLayer('Mining_Monitoring_outline');
    //     map.removeLayer('Project');
    //     map.removeLayer('Project_outline');
    //     map.removeLayer('Forest_Logging_Detection');
    //     map.removeLayer('Forest_Logging_Detection_outline');
    //     map.removeLayer('Land_Cover');
    //     map.removeLayer('Land_Cover_outline');
    //     map.removeLayer('Squatters_Camps');
    //     map.removeLayer('Squatters_Camps_outline');
    //     map.removeLayer('Land_Use');
    //     map.removeLayer('Land_Use_outline');
    //     map.removeLayer('Azuri_Towers_Nigeria');
    //     map.removeLayer('Azuri_Towers_Nigeria_outline');
    //     map.removeLayer('Azuri_Towers_Nigeria');
    //     map.removeLayer('Azuri_Towers_Nigeria_outline');
    //     map.removeSource(source.getId())
    // }
}
let globalvar;
// function getLayerId(feature) {
//     console.log(globalvar)
// }


// *==============================> Slider Comparison imege <================================//
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

// ---------------------------- To Make sidebar Active when click  ----------------------------//

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


// *-------------------------- Select options------------------------//
//  left Selector

// function to create li from list 
function linkedImageWithSelect(idlayer) {
    // const layerId = getLayerId();
    // console.log(typeof(idlayer));
    const fileNames = [];
    if (idlayer == 'Project') {
        fileNames.push("6-2023", "2-2022");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Forest_Logging_Detection') {
        fileNames.push("10-3-2024", "16-12-2023", "6-1-2023");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Land_Cover') {
        fileNames.push("2023", "2018");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Squatters_Camps') {
        fileNames.push("12-2022", "1-2020");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Azuri_Towers_Nigeria') {
        fileNames.push("2-2024", "1-2020", "12-2018", "2-2018", "5-2016");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'TATU_CITY_KENYA') {
        fileNames.push("2-2024", "1-2023", "2-2022", "1-2020", "1-2019", "12-2017");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Mining_Monitoring') {
        fileNames.push("6-2022", "6-2020", "7-2019", "10-2017", "6-2014", "7-2013");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Oil_Spill_Detection') {
        fileNames.push("18-8-2022", "3-8-2022", "29-7-2022", "14-7-2022", "29-6-2022");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Wildfires') {
        fileNames.push("29-3-2024", "9-3-2024", "13-2-2024", "8-2-2024", "29-1-2024", "4-1-2024", "25-12-2023", "10-12-2023", "30-11-2023", "20-11-2023", "15-11-2023", "11-10-2023", "6-10-2023", "1-10-2023", "21-9-2023", "1-9-2023", "22-8-2023", "17-8-2023", "12-8-2023", "23-7-2023");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    }
    else if (idlayer == 'Crop_Health') {
        fileNames.push("21-5-2022", "21-5-2022 NDVI", "11-3-2024", "11-3-2024 NDVI");
        // console.log(fileNames);
        // console.log(idlayer);
        displayFileNames(fileNames);
    };
    function displayFileNames(date) {

        const leftSelector = document.getElementById('image_date_left');
        const rightSelector = document.getElementById('image_date_right');
        date.forEach(date => {
            var listItem = document.createElement('li');
            let span = document.createElement('span');
            listItem.classList.add("option")
            span.classList.add("option-text")
            leftSelector.appendChild(listItem);
            listItem.appendChild(span);
            span.textContent = date;
        });
        date.forEach(date => {
            var listItem1 = document.createElement('li');
            let span1 = document.createElement('span1');
            listItem1.classList.add("option1")
            span1.classList.add("option-text1")
            rightSelector.appendChild(listItem1);
            listItem1.appendChild(span1);
            span1.textContent = date;
        });
        const options = optionMenu.querySelectorAll(".option")
        options.forEach(option => {
            option.addEventListener("click", () => {
                handleOptionClick(option);
            });
        });
        const options1 = optionMenu1.querySelectorAll(".option1")
        options1.forEach(option => {
            option.addEventListener("click", () => {
                handleOptionClick1(option);
            });
        });
    }
}

// Function to handle click event of select button
function handleSelectButtonClick() {
    optionMenu.classList.toggle("active");
}
function handleSelectButtonClick1() {
    optionMenu1.classList.toggle("active");
}


function handleOptionClick(option) {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
    const element1 = document.getElementById("img_right");
    if (globalvar == "Land_Cover") {
        element1.setAttribute("src", `../Geo File/Polygon Create/land-C-S-image-${selectedOption}.jpg`);
    }
    else if (globalvar == "Project" || globalvar == "Forest_Logging_Detection") {
        element1.setAttribute("src", `../Geo File/Polygon Create/${selectedOption}.jpg`);
    }
    else if (globalvar == "Squatters_Camps") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Squatters_Camps-${selectedOption}.jpg`);
    }
    else if (globalvar == "Azuri_Towers_Nigeria") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Azuri_Towers_Nigeria-${selectedOption}.jpg`);
    }
    else if (globalvar == "TATU_CITY_KENYA") {
        element1.setAttribute("src", `../Geo File/Polygon Create/TATU_CITY_KENYA-${selectedOption}.jpg`);
    }
    else if (globalvar == "Mining_Monitoring") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Mining_Monitoring-${selectedOption}.jpg`);
    }
    else if (globalvar == "Oil_Spill_Detection") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Oil_Spill_Detection-${selectedOption}.jpg`);
    }
    else if (globalvar == "Wildfires") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Wildfires-${selectedOption}.jpg`);
    }
    else if (globalvar == "Crop_Health") {
        element1.setAttribute("src", `../Geo File/Polygon Create/Crop_Health-${selectedOption}.jpg`);
    };
}
function handleOptionClick1(option) {
    let selectedOption1 = option.querySelector(".option-text1").innerText;
    sBtn_text1.innerText = selectedOption1;
    optionMenu1.classList.remove("active");
    const element2 = document.getElementById("img_left");
    if (globalvar == "Land_Cover") {
        element2.setAttribute("src", `../Geo File/Polygon Create/land-C-S-image-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Project" || globalvar == "Forest_Logging_Detection") {
        element2.setAttribute("src", `../Geo File/Polygon Create/${selectedOption1}.jpg`);
    }
    else if (globalvar == "Squatters_Camps") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Squatters_Camps-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Azuri_Towers_Nigeria") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Azuri_Towers_Nigeria-${selectedOption1}.jpg`);
    }
    else if (globalvar == "TATU_CITY_KENYA") {
        element2.setAttribute("src", `../Geo File/Polygon Create/TATU_CITY_KENYA-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Mining_Monitoring") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Mining_Monitoring-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Oil_Spill_Detection") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Oil_Spill_Detection-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Wildfires") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Wildfires-${selectedOption1}.jpg`);
    }
    else if (globalvar == "Crop_Health") {
        element2.setAttribute("src", `../Geo File/Polygon Create/Crop_Health-${selectedOption1}.jpg`);
    };

}

selectBtn.addEventListener("click", handleSelectButtonClick);
selectBtn1.addEventListener("click", handleSelectButtonClick1);

const hoverable = document.querySelector('.Montoring_project');
const allhoverable = document.querySelector('.main_list_li');
const target = document.querySelector('.list_detection2');
hoverable.addEventListener('mouseover', function () {
    target.style.display = 'block';
});
target.addEventListener('mouseleave', function () {
    target.style.display = 'none';
});
allhoverable.addEventListener('mouseover', function () {
    target.style.display = 'none';
});

