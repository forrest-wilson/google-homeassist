$(document).ready(function() {
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    $("#signinButton").click(function() {
        $("#overlay").fadeIn(300);
    });

    $("#closeButton").click(function() {
        $("#overlay").fadeOut(300);
    });
});