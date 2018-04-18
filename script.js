function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function home() {
    document.getElementById('contents').innerHTML = loadPage('Home.html');
}

function news() {
    document.getElementById('contents').innerHTML = loadPage('News.html');
}

function contact() {
    document.getElementById('contents').innerHTML = loadPage('Contact.html');
}

function about() {
    document.getElementById('contents').innerHTML = loadPage('About.html');
}