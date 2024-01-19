let countInterval;

const countdownDate = new Date('Jan 1, 2023 00:00:00').getTime();

const startTimer = () => {
    countInterval = setInterval(updateTimer, 1000);
};

const stopTimer = () => {
    clearInterval(countInterval);
    resetTimer();
};

const updateTimer = () => {
    const currentDate = new Date().getTime();
    const diff = countdownDate - currentDate;

    if (diff >= 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    } else {
        clearInterval(countInterval);
        resetTimer();
    }
};

const resetTimer = () => {
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
};

const formatTime = (time) => {
    return time < 10 ? '0' + time : time;
};
