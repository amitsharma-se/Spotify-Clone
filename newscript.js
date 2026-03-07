// Elements select karein
const audioElement = document.getElementById('masterSong');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const progressBar = document.querySelector('.progress-bar');
const currentTimeDisplay = document.querySelector('.current-time');
const totalTimeDisplay = document.querySelector('.total-time');

// Shuruat mein pause button ko chhupa dein (agar CSS se nahi chhupaya hai toh)
pauseButton.style.display = "none";

// 1. Play Button Logic
playButton.addEventListener('click', () => {
    audioElement.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
    console.log("Music Playing");
});

// 2. Pause Button Logic
pauseButton.addEventListener('click', () => {
    audioElement.pause();
    pauseButton.style.display = "none";
    playButton.style.display = "inline";
    console.log("Music Paused");
});

// 3. Seek bar ko gaane ke saath update karein
audioElement.addEventListener('timeupdate', () => {
    // Progress bar update
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;

    // Time update (Minutes:Seconds)
    let curMin = Math.floor(audioElement.currentTime / 60);
    let curSec = Math.floor(audioElement.currentTime % 60);
    if(curSec < 10) curSec = `0${curSec}`;
    currentTimeDisplay.innerText = `${curMin}:${curSec}`;
});

// 4. Seek bar se gaana change karein
progressBar.addEventListener('input', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

// 5. Jab gaana load ho jaye toh total time dikhayein
audioElement.addEventListener('loadedmetadata', () => {
    let totMin = Math.floor(audioElement.duration / 60);
    let totSec = Math.floor(audioElement.duration % 60);
    if(totSec < 10) totSec = `0${totSec}`;
    totalTimeDisplay.innerText = `${totMin}:${totSec}`;
});