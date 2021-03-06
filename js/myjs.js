// Nav bar variables
const nav_height = "131px";

// Nav button controls

function nav_button() {
    var a = document.getElementById("inavbar2");
    a.style.padding = "2px 5px 5px";
    a.style.height = nav_height;
    var a = document.getElementById("inav-button-close");
    a.style.display = "block";
    var a = document.getElementById("inav-button");
    a.style.display = "none";
}

function nav_button_close() {
    var a = document.getElementById("inavbar2");
    a.style.padding = "0";
    a.style.height = "0";
    var a = document.getElementById("inav-button-close");
    a.style.display = "none";
    var a = document.getElementById("inav-button");
    a.style.display = "block";
}

function for_media_query(x) {
    if (x.matches) {
        document.getElementById("inavbar2").style.padding = "0px";
        document.getElementById("inavbar2").style.height = "0px";
        document.getElementById("inav-button").style.display = "block";
        document.getElementById("inav-button-close").style.display = "none";
    }
    else {
        document.getElementById("inavbar2").style.padding = "0px";
        document.getElementById("inavbar2").style.height = "0px";
        document.getElementById("inav-button").style.display = "none";
        document.getElementById("inav-button-close").style.display = "none";

    }
}

var x = window.matchMedia("(max-width:760px)"); 
for_media_query(x);
x.addListener(for_media_query);  /*whenever value of x is change, for_media_query is called */


// Navbar closes if clicks anywhere else
window.onclick = function (e) {
    if (!(e.target.matches('.navbut') || e.target.matches('.menu-icon'))) {
        if (document.getElementById("inavbar2").style.height === "131px") {
            nav_button_close();
        }
    }
    if (e.target == don_modal) {
        don_modal.style.display = "none";
    }
}

// Donate Us Modal Close
const don_modal = document.getElementById("don-modal");
function donate_us() {
    don_modal.style.display = "block";
}

const modal_close = document.getElementById("don-close");
modal_close.onclick = function () {
    don_modal.style.display = "none";
}