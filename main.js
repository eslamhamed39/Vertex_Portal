
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
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
const optionMenu1 = document.querySelector(".select-menu1"),
    selectBtn1 = optionMenu1.querySelector(".select-btn1"),
    options1 = optionMenu1.querySelectorAll(".option1"),
    sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

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
}
//-------------------- Map Part ----------------------//


let Buildings_Detection;
fetch('./Layer/Buildings_Detection.json')
    .then(response => response.json())
    .then(data => {
        Buildings_Detection = data;
    })

let Buildings_Detection_outline;
fetch('./Layer/Buildings_Detection_outline.json')
    .then(response => response.json())
    .then(data => {
        Buildings_Detection_outline = data;
    })



let Forest_Logging_Detection;
fetch('./Layer/Forest_Logging_Detection.json')
    .then(response => response.json())
    .then(data => {
        Forest_Logging_Detection = data;
    })
let Forest_Logging_Detection_outline;
fetch('./Layer/Forest_Logging_Detection_outline.json')
    .then(response => response.json())
    .then(data => {
        Forest_Logging_Detection_outline = data;
    })

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
    });
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
    map.on("load", function () {
        map.addLayer(Buildings_Detection);
        map.addLayer(Buildings_Detection_outline);
        // !------------------------------------- Zamalek layer --------------------------------//
        map.addLayer(Forest_Logging_Detection);
        map.addLayer(Forest_Logging_Detection_outline);
    });
    // -------------------------------- Hover section  -----------------------//
    map.on('mouseenter', 'Forest_Logging_Detection', function () {
        map.setPaintProperty('Forest_Logging_Detection', 'fill-color', '#b8cdff'); // Change to red fill color on hover
        map.setPaintProperty('Forest_Logging_Detection_outline', 'line-color', '#182ead'); // Change to red fill color on hover
    });
    // Revert fill color when not hovering over the fill layer
    map.on('mouseleave', 'Forest_Logging_Detection', function () {
        map.setPaintProperty('Forest_Logging_Detection', 'fill-color', '#216bc0'); // Revert to original fill color
        map.setPaintProperty('Forest_Logging_Detection_outline', 'line-color', '#fff'); // Revert to original fill color
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
        removeListleft();
        removeListright();
        // getjson('./Layer/Buildings_Detection.json');
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
        removeListleft();
        removeListright();
    });
    document.getElementById('Forest_Logging_Detection').addEventListener('click', function () {
        var newCoordinates3 = [25.13647, 0.47325];
        var newZoomLevel = 13;
        var duration = 5000;
        map.flyTo({
            center: newCoordinates3,
            zoom: newZoomLevel,
            duration: duration,
            pitch: 45,
            bearing: 0,
        });
        removeListleft();
        removeListright();
    });

    // !------------- change pointer and after click  appear popup --------------------//

    map.on('click', 'Project', function (e) {
        toggleDiv2();
        const element1 = document.getElementById("img_left");
        const element2 = document.getElementById("img_right");
        const element3 = document.getElementById("news");
        const element4 = document.getElementById("url_news");
        const element6 = document.querySelector(".parchart");
        const element7 = document.querySelector(".piechart");
        const element8 = document.getElementById("dashbord_img1");
        const element9 = document.getElementById("dashbord_img2");
        const element10 = document.getElementById("dashbord_img3");
        element1.setAttribute("src", "../Geo File/Polygon Create/2-2022.jpg");
        element2.setAttribute("src", "../Geo File/Polygon Create/6-2023.jpg");
        element3.setAttribute("src", "../Geo File/Polygon Create/Screenshot.png");
        element8.setAttribute("src", "/Dashbord/3.png");
        element9.setAttribute("src", "/Dashbord/4.png");
        element10.setAttribute("src", "/Dashbord/6.png");
        element6.style.display = 'block';
        element7.style.width = "60%";
        element7.style.height = "245px";
        sBtn_text.innerText = "6-2023";
        sBtn_text1.innerText = "2-2022";
        element4.setAttribute("href", "https://www.thecitizen.co.tz/tanzania/news/national/mwanza-gets-ready-for-mega-mall-2533096");
        removeListleft();
        removeListright();
    });
    map.on('mouseenter', 'Project', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'Project', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('click', 'Forest_Logging_Detection', function (e) {
        toggleDiv2();
        const element1 = document.getElementById("img_left");
        const element2 = document.getElementById("img_right");
        const element3 = document.getElementById("news");
        const element4 = document.getElementById("dashbord_img1");
        const element5 = document.getElementById("dashbord_img2");
        const element6 = document.querySelector(".parchart");
        const element7 = document.querySelector(".piechart");
        const element8 = document.getElementById("url_news");
        element1.setAttribute("src", "../Data/Forest_Logging_Detection/6-1-2023.jpg")
        element2.setAttribute("src", "../Data/Forest_Logging_Detection/10-3-2024.jpg")
        element3.setAttribute("src", "../Geo File/Polygon Create/Forest_Logging_News.png")
        element4.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/1.png")
        element5.setAttribute("src", "Data/Forest_Logging_Detection/Dashboed/3.png")
        element6.style.display = 'none'
        element7.style.width = "100%"
        element7.style.height = "255px"
        element8.setAttribute("href", "https://www.reuters.com/article/idUSKBN0OJ00D/")
        sBtn_text.innerText = "10-3-2024"
        sBtn_text1.innerText = "6-1-2023"
        removeListleft();
        removeListright();
    });
    map.on('mouseenter', 'Forest_Logging_Detection', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'Forest_Logging_Detection', function () {
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
    map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point);
        globalvar = features["0"].layer["id"];
        // getLayerId(globalvar);
        linkedImageWithSelect(globalvar);
    });
}

function getLayerId(feature) {
    return feature
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
    };
    if (idlayer == 'Forest_Logging_Detection') {
        fileNames.push("10-3-2024", "16-12-2023", "6-1-2023");
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
    console.log(selectedOption);
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
    const element1 = document.getElementById("img_right");
    element1.setAttribute("src", `../Geo File/Polygon Create/${selectedOption}.jpg`);
}
function handleOptionClick1(option) {
    let selectedOption1 = option.querySelector(".option-text1").innerText;
    sBtn_text1.innerText = selectedOption1;
    optionMenu1.classList.remove("active");
    const element2 = document.getElementById("img_left");
    element2.setAttribute("src", `../Geo File/Polygon Create/${selectedOption1}.jpg`)
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

