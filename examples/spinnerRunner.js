$(document).ready(function() {
    var data = [];
    var wheel;

    var createWheel = function() {
        var config = {
            margins: {top: 40, right: 10, bottom: 10, left: 10},
            outerR: 200,
            h: 450,
        };

        if (data.length) config.data = data;

        wheel = new Spinner("#spinnerContainer", config);
    };

    $("#spin").click(function() {
        var spinResult = wheel.spin();
        var tyme = spinResult.duration;
        var slice = spinResult.selection;

        document.getElementById("spin").disabled = true;

        setTimeout(function() {
            document.getElementById("spin").disabled = false;
            $("#result").html("<span>And the winner is...<strong>" + spinResult.selection.key + "!!!</strong></span>");
        }, tyme);
    });


    createWheel();
});
