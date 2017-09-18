$(document).ready(function() {
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    $("#signinButton").click(function() {
        $("#signinOverlay").fadeIn(300);
    });

    $("#closeButton").click(function() {
        $("#signinOverlay").fadeOut(300);
    });
});