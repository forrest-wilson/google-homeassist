$(document).ready(function() {

    ///////////////////
    //// Variables ////
    ///////////////////

    var transitionSpeed = 300;
    var docWidth = $(document).width();

    ///////////////////
    //// Functions ////
    ///////////////////

    // Function to add/remove active class to #main depending on screen size
    function toggleTVNavClasses() {
        if (docWidth >= 1280) {
            $("#main").addClass("isActiveTVNavMain");
        } else {
            $("#main").removeClass("isActiveTVNavMain");
        }
    }

    // Calling function so it runs on page load
    toggleTVNavClasses();

    // Update docWidth when screen is resized
    window.onresize = function() {
        docWidth = $(document).width();
        toggleTVNavClasses();
    }
    
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    // Sign In Click Functions
    $("#signinButton").click(function() {
        $("#signinOverlay").fadeIn();
    });

    // Closes all overlays using the .closeButton class
    $(".closeButton, .doneButton").click(function() {
        $("#signinOverlay").fadeOut(transitionSpeed);
        $("#heaterOverlay").fadeOut(transitionSpeed);
        $("#smokeAlarmOverlay").fadeOut(transitionSpeed);
        $("#addDeviceOverlay").fadeOut(transitionSpeed);
        $("#securityCameraOverlay").fadeOut(transitionSpeed);
    });

    // Scene Switching
    $(".action").click(function() {
        $(".action").removeClass("isActiveAction");
        $(this).addClass("isActiveAction");
    });

    // Navigation popout
    $("#hamburgerButton").click(function() {
        $("#mobileNav").toggleClass("isActiveMobileNav");
        $(".line1").toggleClass("isHamburgerPressedLine1");
        $(".line2").toggleClass("isHamburgerPressedLine2");
        $(".line3").toggleClass("isHamburgerPressedLine3");

        if ($(this).hasClass("navOpen")) {
            $(this).removeClass("navOpen");
            $("#mask").fadeOut(transitionSpeed);
        } else {
            $(this).addClass("navOpen");
            $("#mask").fadeIn(transitionSpeed);
        }
    });

    // Navigation dropdown
    $("#tvHamburgerButton").click(function() {
        $("#tvNav").toggleClass("isActiveTVNav");
        $("#main").toggleClass("isActiveTVNavMain");
        $(".line1").toggleClass("isHamburgerPressedLine1");
        $(".line2").toggleClass("isHamburgerPressedLine2");
        $(".line3").toggleClass("isHamburgerPressedLine3");
    });

    // Fade In Heater Overlay
    $(".heaterSettings").click(function() {
        $("#heaterOverlay").fadeIn(transitionSpeed);
    });

    // Fade Out Heater Overlay
    $("#heaterOverlay .doneButton").click(function() {
        $("#heaterOverlay").fadeOut(transitionSpeed);
    });

    // Show Smoke Alarm Overlay
    $(".smokeAlarmSettings").click(function() {
        $("#smokeAlarmOverlay").fadeIn(transitionSpeed);
    });

    // Test Alarm Button
    $(".testAlarmButton").click(function() {
        $(this).hide();
        $(".testingAlarmButton").show();
    });

    // Testing Alarm Button
    $(".testingAlarmButton").click(function() {
        $(this).hide();
        $(".testAlarmButton").show();
    });

    // Show More Devices
    $(".showMoreButton").click(function() {
        $(this).hide();
        $(this).parent().find(".toggleableDevices").addClass("isActiveToggleableDevices");
    });

    // Hide More Devices
    $(".showLessButton").click(function() {
        $(this).parent().removeClass("isActiveToggleableDevices");
        $(this).parent().parent().find(".showMoreButton").show();
    });

    // Show Add Device Overlay
    $(".addDeviceButton").click(function() {
        $("#addDeviceOverlay").fadeIn(transitionSpeed);
    });

    // Show Security Camera Overlay
    $(".securitySettings").click(function() {
        $("#securityCameraOverlay").fadeIn(transitionSpeed);
    });
});