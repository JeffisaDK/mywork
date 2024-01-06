function showportfolio() {
    let portoscreen = document.getElementById("portfolio");
    let aboutscreen = document.getElementById("about");

    let portobtn = document.getElementById("portfoliobtn");
    let aboutbtn = document.getElementById("aboutbtn");

    portoscreen.style.display = "block";
    portobtn.className = "active1";

    aboutscreen.style.display = "none";
    aboutbtn.className = "menu2";
}

function showabout() {
    let portoscreen = document.getElementById("portfolio");
    let aboutscreen = document.getElementById("about");

    let portobtn = document.getElementById("portfoliobtn");
    let aboutbtn = document.getElementById("aboutbtn");

    aboutscreen.style.display = "block";
    aboutbtn.className = "active2";

    portoscreen.style.display = "none";
    portobtn.className = "menu1";
}