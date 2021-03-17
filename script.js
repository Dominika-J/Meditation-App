const $container = document.getElementById('container');
const $text = document.getElementById('text');

const TIME_TOTAL = 7500;
const TIME_BREATHING = (TIME_TOTAL / 5) * 2;
const TIME_HOLD = TIME_TOTAL / 5;

const circleAnimation = () => {
    $text.innerText = 'Nádech';
    $container.className = 'container grow';

    setTimeout(() => {
        $text.innerText = 'Výdrž';

        setTimeout(() => {
            $text.innerText = 'Výdech';
            $container.className = 'container shrink'
        }, TIME_HOLD)
    }, TIME_BREATHING);
}

circleAnimation();

setInterval(circleAnimation, TIME_TOTAL);

