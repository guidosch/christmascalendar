/**
 * Simple Christmas Calendar by Guido Schnider
 * Replace each song link with one of your favorites and send to your friends!
 * Hint: Use the embed link as it gets displayed in a small area inside the page.
 * Use the Spotify desktop app and the share feature to geht the song links.
 */

songs =
[
"https://open.spotify.com/embed/track/5bh8l1991KxZHgsYoV6oEx?si=XgMjmdAdSbGdKKYX3QyXlA",
"https://open.spotify.com/embed/track/4hkL4pzAuVtpS70FzS1i5i?si=GPM3TIucTEapQA5EfS5JPg",
"https://open.spotify.com/embed/track/76pypmPEnNfWhtuLDQH7dk?si=0sSINqCLRx-wE3dh3lugVA",
"https://open.spotify.com/embed/track/2y8PnhXwnyHTxe72TtY58e?si=Wp5w0aB_SvazVQ1NaXrZHw",
"https://open.spotify.com/embed/track/2Xb1md4kHUzZpnUTZ4fYC4?si=s6KP6iHCRMGOF7qOBireGg",
"https://open.spotify.com/embed/track/0iFEdVpsCi89Wd3UjlmdMH?si=v5U18UFjR_WLSKKvrwDz7A",
"https://open.spotify.com/embed/track/3ejU8JMenktibKkNz9dPBL?si=91LyYq-nSTOnwspOB3pwIQ",
"https://open.spotify.com/embed/track/4sb1gQICYmaLMulCaEAtUo?si=ZoA7qDq8Q6euPHH0GYWf8Q",
"https://open.spotify.com/embed/track/4b1dW0Msi3ksTI3ZvFURfQ?si=RxmVx2GxQ2mBZ4OyC1xgJw",
"https://open.spotify.com/embed/track/6MheD6qKezwyZVtuHSeGbJ?si=FtIA9_JEQDW3qpddFhdsFg",
"https://open.spotify.com/embed/track/5CkXCkzvAbmX6JnbaDaJvd?si=sOcYdO9nSaWRQdUA1xJTrQ",
"https://open.spotify.com/embed/track/4NxrqviMDGuKa0jmVNlVrE?si=JuyewQw1SRKQX3ELZ8VFwA",
"https://open.spotify.com/embed/track/7eqj2U3xVj38OtdMHpN0zw?si=swHGIamDRZqzHHugQUFNaw",
"https://open.spotify.com/embed/track/7vZ8buWHZViuzjiGc20cY0?si=G4rZOsIyTiu4UgN_QmYoXA",
"https://open.spotify.com/embed/track/3rRdokhE8UQS4yjun5h3iK?si=IPMEq8UNSjeFbKWhKdJGbw",
"https://open.spotify.com/embed/track/3AO4JN8iEAuxwclIh2qZdN?si=uBFr_kjVRom0sej5njipjA",
"https://open.spotify.com/embed/track/22SNmmSMXIrADD6ahmsj0N?si=Rt-O2wdLS1-_PxsMcsUlhA",
"https://open.spotify.com/embed/track/3RJeEv9n8dP55yeHucEMxB?si=GyxW9Z2eQW-z9YllMCPDfQ",
"https://open.spotify.com/embed/track/4oLAFHhUbUpW6Z8Ux1CPEp?si=-k7fqB3gQVG-gZ36hKPnNQ",
"https://open.spotify.com/embed/track/766Qw2T1KAYK0yVsmdVgLo?si=UR4ZhVh5TlSLDIxAfVChag",
"https://open.spotify.com/embed/track/3R1abI6qZDg9d3CI4oLDnf?si=gGEHBVILT9KX2DybX2UXfA",
"https://open.spotify.com/embed/track/3HNDHljCQQiWIpagsFlpVK?si=k6jTO6duRVWoTh3wfAyTDg",
"https://open.spotify.com/embed/track/3lIVaQHnr0s5g0aCeEcc1F?si=n0yfP6DAR7Cm7GCn4HFVew",
"https://open.spotify.com/embed/track/5hrGOS8UP9brY2JizYc5z5?si=g7w-CSWDQJO461FVuVnl9w",
"https://open.spotify.com/embed/track/1V4ip6ztWNqZQYAXcBWMFz?si=P8gsKPdeSsihfjagSjuy6Q",
"https://open.spotify.com/embed/track/52xQMyCABMvx7nSoPZXeSV?si=Rlj8pmELQXmxuPDKMgiy2w",
"https://open.spotify.com/embed/track/2hZt68H0qMekKFx30gzJzH?si=EkxcCaDqSDSdiDomvXi7BA",
"https://open.spotify.com/embed/track/6FKNqGtixJsL4Y1Qcpj7jQ?si=DKc4ApN7S8SFqzY3-qeWKg",
"https://open.spotify.com/embed/track/15ouqiBsgL12olEwP3COsH?si=eFtHAPzmR22dvORBdbm1Dg",
"https://open.spotify.com/embed/track/7q75JQTz2KqTtgEgIO0ULB?si=eax5GETFTn6peaxNI94jiw",
"https://open.spotify.com/embed/track/0NLyAAIk319L0VKYrRgnoW?si=nmUnp2SfSFqgSc0m6q5hMA"
];

    
    
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

function registerClickAction() {
    $(".songLink").click(function (event) {
        var id = event.currentTarget.id;
        setCookie(id);
        setImage(id);
        playSong(id);
    });
}

function playSong(id) {
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

function resetCookie(){
    Cookies.set(COOKIE_NAME, JSON.stringify([]), { expires: 50 });
}

$(document).ready(function () {
    buildUI();
    registerClickAction();
    hideClickedDays();
});