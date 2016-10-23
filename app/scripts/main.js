(function () {
    'use strict';

    var secondsArrow, minutesArrow, hoursArrow;

    document.addEventListener('DOMContentLoaded', function () {
        secondsArrow = document.getElementsByClassName('clock-arrow__seconds')[0];
        minutesArrow = document.getElementsByClassName('clock-arrow__minutes')[0];
        hoursArrow = document.getElementsByClassName('clock-arrow__hours')[0];

        window.requestAnimationFrame(setAngles);

        function setAngles() {
            var date = new Date();
            var milliseconds = date.getTime() - date.getTimezoneOffset() * 60 * 1000;

            var secondAngle = milliseconds / (60 * 1000) * 360;
            var minuteAngle = milliseconds / (60 * 60 * 1000) * 360;
            var hourAngle = milliseconds / (12 * 60 * 60 * 1000) * 360;

            secondsArrow.style.transform = 'rotate(' + secondAngle + 'deg)';
            minutesArrow.style.transform = 'rotate(' + minuteAngle + 'deg)';
            hoursArrow.style.transform = 'rotate(' + hourAngle + 'deg)';

            window.requestAnimationFrame(setAngles);
        }
    });
})();