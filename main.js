
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
const content_image = document.querySelector(".content-image");
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
const container_row2 = document.querySelector(".container_row2");
const timeline = document.querySelector(".timeline");
const container_dashbord = document.querySelector(".container_dashbord ");
const loading = document.querySelector(".loading ");
const home_content = document.querySelector(".home_content");
const side_bar = document.querySelector(".Side_bar");


// todo:------------------------- i end here ----------------------------//

// console.log(width_image + "px");
// content_image.style.width = width_image + "px";
// content_image.style.height = "100%";
// console.log(content_image);



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
    console.log(event.target.innerHTML)
    // if ((div.contains(event.target.innerHTML)) == "kkkonitoring Projects") {
    //     div.style.display = 'block';
    //     document.addEventListener('click', clickOutsideDiv1);
    // }
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        document.removeEventListener('click', clickOutsideDiv1);
    }
    else if (div.contains(event.target)) {
        if (event.target.innerHTML == "Monitoring Projects") {
            div.style.display = 'block';
            document.addEventListener('click', clickOutsideDiv1);
        } else {
            div.style.display = 'none';
            document.removeEventListener('click', clickOutsideDiv1);
        }
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

//-------------------- function to Switch login & logout page ----------------------//
function switchPage() {
    loginPage.classList.replace("d-block", "loading_hidden");
    window.location.pathname = "/Home.html";
    // window.location.pathname = "http://85.31.237.210:8080/portal_v1/Home.html";
}

// setTimeout(() => {
//     loading.classList.replace("d-block", "d-none");
//     // home_content.classList.replace("d-none", "d-iznlineblock");

// }, 2800);
// setTimeout(() => {
//     // home_content.classList.replace("d-none", "d-iznlineblock");
//     Home_section.style.opacity = "1";
//     // side_bar.classList.replace("d-none", "d-flex");
// }, 3000);



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


function loadTomTomAPI() {
    return new Promise((resolve, reject) => {
        // Load the TomTom API asynchronously
        const script = document.createElement('script');
        script.src = 'https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.69.0/maps/maps-web.min.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function initializeMap() {
    try {
        // Wait for the TomTom API to finish loading
        await loadTomTomAPI();
        mapContent()

    } catch (error) {
        console.error('Error loading TomTom API:', error);
    }
}

// Call initializeMap when your page is ready
initializeMap();





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
        element7.style.width = "58%";
        container_dashbord.style.removeProperty("width")
        sBtn_text.innerText = "6-2023";
        sBtn_text1.innerText = "2-2022";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.thecitizen.co.tz/tanzania/news/national/mwanza-gets-ready-for-mega-mall-2533096");
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
        element1.setAttribute("src", "../Geo File/Polygon Create/6-1-2023.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/10-3-2024.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Forest_Logging_News.png");
        element8.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/11.png");
        element9.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/13.png");
        element6.style.display = 'none';
        element8.style.display = "block";
        element9.style.display = "block";
        element10.style.display = "block";
        element7.style.width = "100%";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        element3.style.display = "block";
        element4.setAttribute("href", "https://www.lifegate.com/congo-basin-rainforest-logging")
        sBtn_text.innerText = "10-3-2024";
        sBtn_text1.innerText = "6-1-2023";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        container_dashbord.style.removeProperty("width");
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
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        element7.style.width = "100%";
        sBtn_text.innerText = "2023";
        sBtn_text1.innerText = "2018";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.thecitizen.co.tz/tanzania/news/national/mwanza-gets-ready-for-mega-mall-2533096");
        container_dashbord.style.removeProperty("width");
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
        element1.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps-1-2020.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps-12-2022.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Squatters_Camps_new.jpg");
        element8.setAttribute("src", "");
        element9.setAttribute("src", "");
        element10.setAttribute("src", "");
        element6.style.display = 'none';
        element3.style.display = "block";
        element8.style.display = "none";
        element9.style.display = "none";
        element10.style.display = "none";
        element3.style.height = "140px";
        element7.style.width = "100%";
        sBtn_text.innerText = "12-2022";
        sBtn_text1.innerText = "1-2020";
        container_dashbord.style.width = "100%";
        container_dashbord.style.height = "100%";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.sciencephoto.com/media/182797/view/squatter-camp");
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
        sBtn_text.innerText = "Land Use";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        sBtn_text1.innerText = "satellite Image";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        container_dashbord.style.removeProperty("width");
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
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        sBtn_text.innerText = "2-2024";
        sBtn_text1.innerText = "5-2016";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.itbng.com/azuri-peninsula-eko-atlantic-city-lagos");
        container_dashbord.style.removeProperty("width");
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
        sBtn_text.innerText = "2-2024";
        sBtn_text1.innerText = "12-2017";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://nellions.co.ke/blog/upcoming-residential-estates-nairobi/#9-Tatu-City");
        container_dashbord.style.removeProperty("width");
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
        sBtn_text.innerText = "Classification";
        sBtn_text1.innerText = "Satellite Image";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        container_dashbord.style.removeProperty("width");
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
        element3.style.height = "130px";
        sBtn_text.innerText = "06-2022";
        sBtn_text1.innerText = "07-2013";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        container_dashbord.style.removeProperty("width")
        element4.setAttribute("href", "https://www.digest.tz/ongoing-struggle-with-small-scale-mining-threating-environment/");
    });

    // ^---------------------------------- Oil Spill Detection -----------------------------//
    // oil_Spill_Detection.addEventListener("click", async function () {
    //     await Refetch("Oil_Spill_Detection")
    //     try {
    //         removeAllSourceLayers(map)
    //     } catch (error) {
    //     }
    //     await map.addLayer(layer);
    //     await map.addLayer(layer_outline);
    //     element1.setAttribute("src", "../Geo File/Polygon Create/oil_spill_3-8-2022.PNG");
    //     element2.setAttribute("src", "../Geo File/Polygon Create/oil_spill_12-10-2022.PNG");
    //     element3.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-news.jpg");
    //     element8.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-parchart.jpg");
    //     element9.setAttribute("src", "../Geo File/Polygon Create/Oil_Spill_Detection-pointchart.jpg");
    //     element3.style.display = "block";
    //     element3.style.height = "130px";
    //     element6.style.display = 'none';
    //     element8.style.display = "block";
    //     element9.style.display = "block";
    //     element10.style.display = "block";
    //     container_row2.style.height = "48.2%";
    //     timeline.style.height = "50%";
    //     element7.style.width = "100%";
    //     sBtn_text.innerText = "12-10-2022";
    //     sBtn_text1.innerText = "3-8-2022";
    //     image_date_left.style.height = 'auto';
    //     image_date_right.style.height = 'auto';
    //     element4.setAttribute("href", "https://enterprise.press/greeneconomys/when-oil-washed-up-on-dahabs-shores-local-residents-jumped-into-action/");
    //     container_dashbord.style.removeProperty("width");
    // });

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
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        sBtn_text.innerText = "29-3-2024";
        sBtn_text1.innerText = "23-7-2023";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.thenationalnews.com/world/2023/07/26/horrors-of-wildfires-from-space-satellite-photos-track-blazes-in-europe-and-north-africa/");
        container_dashbord.style.removeProperty("width");
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
        sBtn_text.innerText = "Crop Disease Detection";
        sBtn_text1.innerText = "Satellite Image";
        container_row2.style.height = "50%";
        timeline.style.height = "50%";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        element4.setAttribute("href", "https://www.downtoearth.org.in/news/agriculture/savage-mode-in-a-warmer-wetter-world-pests-are-multiplying-faster-and-damaging-crops-severely-91049");
        container_dashbord.style.removeProperty("width");
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
        element1.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-11-3-2023.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/Crop_Health-11-3-2023 NDVI.jpg");
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
        sBtn_text.innerText = "11-3-2023 NDVI";
        sBtn_text1.innerText = "11-3-2023";
        image_date_left.style.height = 'auto';
        image_date_right.style.height = 'auto';
        container_row2.style.height = "49%";
        timeline.style.height = "50%";
        // satelite_Image.style.width = "56%";
        element4.setAttribute("href", "https://www.usaid.gov/kenya/agriculture-food-and-water-security");
        container_dashbord.style.removeProperty("width");
    });

    // ^---------------------------------- Home -----------------------------//

    Home_btn.addEventListener("click", function () {
        try {
            removeAllSourceLayers(map)
        } catch (error) {
            // console.log("error")
        }
    });

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
            var duration = 6000;
            map.flyTo({
                center: newCoordinates,
                zoom: newZoomLevel,
                duration: duration,
                pitch: angle,
                // bearing: 0,
            });
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
    // handleMapClick('Oil_Spill_Detection', [34.986951, 29.527043], 13, 45);
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

    // &======================== click layer to appear popup Detection ========================//

    var layerNames = [
        'Forest_Logging_Detection',
        'Land_Cover',
        'Land_Use',
        'Crop_Classification',
        'Azuri_Towers_Nigeria',
        'TATU_CITY_KENYA',
        'Crop_Health',
        'Crop_Disease_Detection',
        'Oil_Spill_Detection',
        'Wildfires',
        'Mining_Monitoring',
        'Project',
        'Squatters_Camps'
    ];

    // Loop through the array and bind the click event for each layer
    layerNames.forEach(function (layerName) {
        map.on('click', layerName, function (e) {
            toggleDiv2();
            // console.log(layerName)
        });
    });

    function toggleDiv2() {
        var div = document.querySelector('.dialog_detect');
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'flex';
            setTimeout(function () {
                document.addEventListener('mousedown', clickOutsideDiv);
            }, 1);
        }
        else {
            div.style.display = 'none';
            document.removeEventListener('mousedown', clickOutsideDiv);
        }
        handleResize();
        removeListleft();
        removeListright();
    }
    function handleResize() {
        // Code to run when the window size changes
        let width_image = document.querySelector('.wrapper').getBoundingClientRect().width;
        // console.log(width_image)
        document.getElementById('img_right').style.width = width_image + "px";
        document.getElementById('img_left').style.width = width_image + "px";
        slider()
    }

    window.addEventListener('resize', handleResize);


    function clickOutsideDiv(event) {
        var div = document.querySelector('.dialog_detect');
        if (!div.contains(event.target)) {
            div.style.display = 'none';
            document.removeEventListener('click', clickOutsideDiv);
        }
    }
    map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point);
        globalvar = features["0"].layer["id"];
        // getLayerId();
        linkedImageWithSelect(globalvar);
    });
    map.on('load', function() {
        setTimeout(function() { load_map(); }, 1000);
        // load_map()
    });
}
function load_map() {
    const map = document.getElementById('map');
    map.style.opacity = "1";
    Home_section.classList.add("Home_section")
    Home_section.style.opacity ="1";
    side_bar.style.opacity ="1";
    loading.classList.add("loading_hidden")
}
let globalvar;


// *==============================> Slider Comparison imege <================================//
function slider() {
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
        let minWidth = 0;
        let maxWidth = document.querySelector('.wrapper').getBoundingClientRect().width;
        let initialPosition = 250;
        let transform = initialPosition + (x - initialPosition);
        transform = Math.min(Math.max(transform, minWidth), maxWidth);
        document.querySelector('.after').style.width = transform + "px";
        document.querySelector('.scroller').style.left = transform + "px";
    };

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
};
// ---------------------------- To Make sidebar Active when click  ----------------------------//

function setActive(elementId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.getElementById(elementId).classList.add('active');
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        setActive(event.currentTarget.id);
    });
});
document.body.addEventListener('click', event => {
    const clickedElement = event.target;
    if (!clickedElement.closest('.nav-item') & !document.getElementById("detect").classList.contains("active")) {
        setActive('Home');
    }
});
// *------------------------- Select options------------------------//
//  left Selector
// function to create li from list 
function linkedImageWithSelect(idlayer) {
    const fileNamesMap = {
        'Project': ["6-2023", "2-2022"],
        'Forest_Logging_Detection': ["10-3-2024", "16-12-2023", "6-1-2023"],
        'Land_Cover': ["2023", "2018"],
        'Squatters_Camps': ["12-2022", "1-2020"],
        'Azuri_Towers_Nigeria': ["2-2024", "1-2020", "12-2018", "2-2018", "5-2016"],
        'TATU_CITY_KENYA': ["2-2024", "1-2023", "2-2021", "1-2020", "1-2019", "12-2017"],
        'Mining_Monitoring': ["6-2022", "6-2020", "10-2017", "6-2014", "7-2013"],
        'Oil_Spill_Detection': ["12-10-2022", "27-9-2022", "3-8-2022"],
        'Wildfires': ["29-3-2024", "30-11-2023", "11-10-2023", "23-7-2023"],
        'Crop_Health': ["21-5-2022", "21-5-2022 NDVI", "11-3-2023", "11-3-2023 NDVI"]
    };
    const fileNames = fileNamesMap[idlayer] || [];
    displayFileNames(fileNames);
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
    const selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
    const element1 = document.getElementById("img_right");
    const imagePaths = {
        "Land_Cover": `../Geo File/Polygon Create/land-C-S-image-${selectedOption}.jpg`,
        "Project": `../Geo File/Polygon Create/${selectedOption}.jpg`,
        "Forest_Logging_Detection": `../Geo File/Polygon Create/${selectedOption}.jpg`,
        "Squatters_Camps": `../Geo File/Polygon Create/Squatters_Camps-${selectedOption}.jpg`,
        "Azuri_Towers_Nigeria": `../Geo File/Polygon Create/Azuri_Towers_Nigeria-${selectedOption}.jpg`,
        "TATU_CITY_KENYA": `../Geo File/Polygon Create/TATU_CITY_KENYA-${selectedOption}.jpg`,
        "Mining_Monitoring": `../Geo File/Polygon Create/Mining_Monitoring-${selectedOption}.jpg`,
        "Oil_Spill_Detection": `../Geo File/Polygon Create/oil_spill_${selectedOption}.PNG`,
        "Wildfires": `../Geo File/Polygon Create/Wildfires-${selectedOption}.jpg`,
        "Crop_Health": `../Geo File/Polygon Create/Crop_Health-${selectedOption}.jpg`
    };
    const imagePath = imagePaths[globalvar];
    if (imagePath) {
        element1.setAttribute("src", imagePath);
    }
}

function handleOptionClick1(option) {
    const selectedOption1 = option.querySelector(".option-text1").innerText;
    sBtn_text1.innerText = selectedOption1;
    optionMenu1.classList.remove("active");
    const element2 = document.getElementById("img_left");
    const imagePaths = {
        "Land_Cover": `../Geo File/Polygon Create/land-C-S-image-${selectedOption1}.jpg`,
        "Project": `../Geo File/Polygon Create/${selectedOption1}.jpg`,
        "Forest_Logging_Detection": `../Geo File/Polygon Create/${selectedOption1}.jpg`,
        "Squatters_Camps": `../Geo File/Polygon Create/Squatters_Camps-${selectedOption1}.jpg`,
        "Azuri_Towers_Nigeria": `../Geo File/Polygon Create/Azuri_Towers_Nigeria-${selectedOption1}.jpg`,
        "TATU_CITY_KENYA": `../Geo File/Polygon Create/TATU_CITY_KENYA-${selectedOption1}.jpg`,
        "Mining_Monitoring": `../Geo File/Polygon Create/Mining_Monitoring-${selectedOption1}.jpg`,
        "Oil_Spill_Detection": `../Geo File/Polygon Create/oil_spill_${selectedOption1}.PNG`,
        "Wildfires": `../Geo File/Polygon Create/Wildfires-${selectedOption1}.jpg`,
        "Crop_Health": `../Geo File/Polygon Create/Crop_Health-${selectedOption1}.jpg`
    };
    const imagePath = imagePaths[globalvar];
    if (imagePath) {
        element2.setAttribute("src", imagePath);
    }
}


// ====================== To show Montoring List ==================== //
setTimeout(() => {
    selectBtn.addEventListener("click", handleSelectButtonClick);
    selectBtn1.addEventListener("click", handleSelectButtonClick1);
}, 3000);

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



const detection_icon = document.querySelector('.detection_icon');
const icon_land = document.getElementById("icon_land")
detection_icon.addEventListener('mouseover', function () {
    icon_land.setAttribute("src", "https://img.icons8.com/ios/ffffff/country--v1.png");
});
detection_icon.addEventListener('click', function () {
    icon_land.setAttribute("src", "https://img.icons8.com/ios/ffffff/country--v1.png");
});
detection_icon.addEventListener('focus', function () {
    icon_land.setAttribute("src", "https://img.icons8.com/ios/ffffff/country--v1.png");
});
detection_icon.addEventListener('mouseleave', function () {
    icon_land.setAttribute("src", "https://img.icons8.com/ios/0D6EFD/country--v1.png");
});



// *------------------------- Login page------------------------//


// const login_logo = document.querySelectorAll("#V_logo path");

// for(let i = 0; i < login_logo.length; i++){
//     console.log(` element ${i} is ${login_logo[i].getTotalLength()}`);
// }