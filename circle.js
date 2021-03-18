const $container = document.getElementById('container');
const $text = document.getElementById('text');

const TIME_TOTAL = 7500;
const TIME_BREATHING = (TIME_TOTAL / 5) * 2;
const TIME_HOLD = TIME_TOTAL / 5;

const circleAnimation = () => {
    $text.innerText = 'Inhale';
    $container.className = 'container grow';

    setTimeout(() => {
        $text.innerText = 'Hold';

        setTimeout(() => {
            $text.innerText = 'Exhale';
            $container.className = 'container shrink'
        }, TIME_HOLD)
    }, TIME_BREATHING);
}

circleAnimation();

setInterval(circleAnimation, TIME_TOTAL);

