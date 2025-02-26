function openIgniteWebsite() {
    window.open("https://www.igniteroboticsinternational.org/")
}

function openIntroVideo() {
    window.open("https://www.youtube.com/watch?v=V2cJhmhxSt0")
}

function openYoutube() {
    window.open("https://www.youtube.com/@Texpand")
}

function openInstgram() {
    window.open("https://www.instagram.com/team_texpand?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D")
}

$("#Home").css({ "display": "block" });
$("#AboutUs").css({ "display": "none" });
$("#Outreach").css({ "display": "none" });
$("#Sponsorships").css({ "display": "none" });
$("#PastBots").css({ "display": "none" });

$("#aboutUsTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "block" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "none" });
    $("#centerTabs").toggleClass("test2");


});

$("#homeTab").click(function () {

    $("#Home").css({ "display": "block" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "none" });
    $("#centerTabs").toggleClass("test2");


});

$("#outreachTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "block" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "none" });
    $("#centerTabs").toggleClass("test2");


});

$("#sponsorshipsTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "block" });
    $("#PastBots").css({ "display": "none" });
    $("#centerTabs").toggleClass("test2");


});

$("#pastRobotsTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "block" });
    $("#centerTabs").toggleClass("test2");


});

$("#button").click(function () {

    $("#centerTabs").toggleClass("test2");

});

$("#linkToRobotPage").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "block" });

});



