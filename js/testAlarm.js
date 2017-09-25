// Play Audio function for alarm test
function play() {
    var audio = document.getElementById("smokeAlarmAudio");
    audio.play();

    setTimeout(function() {
       $(".testingAlarmButton").hide();
       $(".testAlarmButton").show();
    }, 3500);
}