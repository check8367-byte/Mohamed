const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("span");

const stream = "https://qurango.net/radio/saud_alshuraim";

let playing = false;

function playAudio() {
    audio.src = stream;
    audio.load();

    audio.play()
    .then(() => {
        playing = true;
        icon.textContent = "🔊";
    })
    .catch(err => {
        console.log("خطأ:", err);
    });
}

function pauseAudio() {
    audio.pause();
    playing = false;
    icon.textContent = "🔇";
}

musicBtn.addEventListener("click", () => {
    if (playing) {
        pauseAudio();
    } else {
        playAudio();
    }
});
