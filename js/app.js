const DivSecond = document.querySelector('.second-hand');
const DivMin = document.querySelector('.min-hand');
const DivHour = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secDeg = ((seconds/60) * 360 + 90 );
    DivSecond.style.transform = 'rotate('+secDeg+'deg)';


    const min = now.getMinutes();
    const secMin = ((min/60) * 360 ) + ((seconds/60) * 6) + 90;
    DivMin.style.transform = 'rotate('+secMin+'deg)';


    const hour = now.getHours();
    const secHour = ((hour/12) * 360) + ((min/30) * 30) + 90;
    DivHour.style.transform = 'rotate('+secHour +'deg)';
    

}


setInterval(setDate, 1000);