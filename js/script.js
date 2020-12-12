'use strict';

const deadline = '2020-12-31';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}