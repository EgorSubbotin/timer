document.addEventListener('DOMContentLoaded', ()=>{

const dedLine='2022-08-20';

function getTime(endTime){
    const t = Date.parse(endTime)-Date.parse(new Date()),
    days=Math.floor(t/(1000*60*60*24)),
    hours=Math.floor(t/(1000*60*60)%24),
    minutes=Math.floor(t/(1000*60)%60),
    seconds= Math.floor(t/1000%60);

    return {
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
}

function getZero(num){
    if (num>=0&& num <10){
        return `0${num}`;
    }else {
        return num;
    }
}

function setDate(){
    const parent = document.querySelector('.timer'),
    days = document.querySelector('#days'),
    hours = parent.querySelector('#hours'),
    minutes = parent.querySelector('#minutes'),
    seconds = parent.querySelector('#seconds');

    setInterval(update, 1000);
    update();


    function update(){
        const t=getTime(dedLine);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total<=0){
            clearInterval(days.innerHTML);
        }
    }
}
setDate();

});