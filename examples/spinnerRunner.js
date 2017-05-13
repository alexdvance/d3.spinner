$(document).ready(function() {
    var data = [];
    var wheels = {};

    var createWheel = function() {
        $('.js-spinner-container').each(function(i, spinnerContainer) {
            var config = {
                margins: {top: 40, right: 10, bottom: 10, left: 10},
                outerR: 200,
                w: 420,
                h: 450,
            };

            var spinnerId = $(this).data('spinnerContainer');
            var spinnerType = $(this).data('spinnerType');

            if (data.length) config.data = data;
            if (spinnerType) config.type = spinnerType;

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
