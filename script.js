/**
 * Simple Christmas Calendar by Guido Schnider
 * Replace each song link with one of your favorites and send to your friends!
 * Hint: Use the embed link as it gets displayed in a small area inside the page.
 * Use the Spotify desktop app and the share feature to geht the song links.
 * e.g. "https://open.spotify.com/embed/track/76pypmPEnNfWhtuLDQH7dk?si=0sSINqCLRx-wE3dh3lugVA",
 */









var images = [
    "bell-icon.png",
    "candles-icon.png",
    "candykane-icon.png",
    "christmass-ball-icon.png",
    "deer-icon.png",
    "gift-icon.png",
    "hat-icon.png",
    "misletoe-icon.png",
    "snowflake-icon.png",
    "sock-icon.png"
];

const COOKIE_NAME = "days-clicked";

function buildUI() {
    var i = 1;
    for (i; i < 25; i++) {
        var bgColor = "#" + Math.random().toString(16).slice(2, 8);
        var dayBox = `
        <div style='background-color:${bgColor}' class='day' id='day-${i}'>
            <div rold='button' class='songLink' id='song-${i}'>
                <span>${i}</span>
            </div>
        </div>`;
        $("#calendar").append(dayBox);
    }
}

function registerClickActions() {
    $(".songLink").click(function (event) {
        var id = event.currentTarget.id;
        setCookie(id);
        setImage(id);
        playSong(id);
    });
    $(".closeButton").click(function (event) {
        $("#songContainer").hide();
    });
}

function playSong(id) {
    $("#songContainer").show();
    var songNumber = parseInt(id.split("-")[1]);
    console.log("playing song #: " + songNumber);
    $("#songFrame").attr("src", songs[--songNumber])
}

function setImage(id) {
    var imageName = "img/" + images[Math.random().toString(10).slice(2, 3)];
    $("#" + id).replaceWith("<img src='" + imageName + "'/>");
}

function setCookie(day) {
    var alreadyClicked;
    if (Cookies.get(COOKIE_NAME) == undefined) {
        alreadyClicked = [];
    } else {
        alreadyClicked = JSON.parse(Cookies.get(COOKIE_NAME));
    }
    alreadyClicked.push(day);
    Cookies.set(COOKIE_NAME, JSON.stringify(alreadyClicked), { expires: 50 });
}

function hideClickedDays() {
    if (Cookies.get(COOKIE_NAME) != undefined) {
        var alreadyClicked = JSON.parse(Cookies.get(COOKIE_NAME));
        alreadyClicked.forEach(id => {
            setImage(id);
        });
    }
}

function resetCookie() {
    Cookies.set(COOKIE_NAME, JSON.stringify([]), { expires: 50 });
}

function setTitle() {
    const params = new URL(location.href).searchParams;
    const list = params.get('list');
    const name = params.get('name');
    var intro = $(".intro").text();
    if (name.length > 0) {
        intro = intro + decodeURIComponent(name);
    }
    $(".intro").text(intro);

}

function loadSongs() {
    const params = new URL(location.href).searchParams;
    const list = params.get('list');
    let script = document.createElement('script');
    script.src = list + ".js";
    document.head.append(script);
}

$(document).ready(function () {
    buildUI();
    registerClickActions();
    hideClickedDays();
    setTitle();
    loadSongs();
});