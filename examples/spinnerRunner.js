$(document).ready(function() {
    var data = [];
    var wheels = {};

    var createWheel = function() {
        var config = {
            margins: {top: 40, right: 10, bottom: 10, left: 10},
            outerR: 200,
            w: 420,
            h: 450,
        };

        if (data.length) config.data = data;

        $('.js-spinner-container').each(function(i, spinnerContainer) {
            var spinnerId = $(this).data('spinnerContainer');

            if($(this).data('spinnerType')) config.type = $(this).data('spinnerType');

            wheels[spinnerId] = new Spinner(spinnerId, config);
        });
    };

    $('.js-spin').click(function() {
        var spinnerId = $(this).data('spinnerContainer');
        var spinResultSelector = $(this).data('spinnerResult');
        var spinResult = wheels[spinnerId].spin();
        var tyme = spinResult.duration;
        var slice = spinResult.selection;

        $(this)[0].disabled = true;

        setTimeout(function() {
            $(this)[0].disabled = false;

            $(spinResultSelector).html(spinResult.selection.key + "!!!");
        }, tyme);
    });


    createWheel();
});
