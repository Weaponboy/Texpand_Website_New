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

});

$("#homeTab").click(function () {

    $("#Home").css({ "display": "block" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "none" });

});

$("#outreachTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "block" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "none" });

});

$("#sponsorshipsTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "block" });
    $("#PastBots").css({ "display": "none" });

});

$("#pastRobotsTab").click(function () {

    $("#Home").css({ "display": "none" });
    $("#AboutUs").css({ "display": "none" });
    $("#Outreach").css({ "display": "none" });
    $("#Sponsorships").css({ "display": "none" });
    $("#PastBots").css({ "display": "block" });

});

$("#button").click(function () {

    $("#navButtons").toggleClass("test2");

});

