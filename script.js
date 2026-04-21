const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("span");

// الرابط المحدث (يدعم HTTPS) لضمان العمل على Vercel
const stream = "https://backup.quran.com.kw/quraan";

let playing = false;

audio.src = stream;
audio.volume = 0.8;
audio.preload = "metadata"; // تعديل بسيط لسرعة الاستجابة

function playAudio() {
    audio.play()
    .then(() => {
        playing = true;
        icon.textContent = "🔊"; 
        musicBtn.classList.add("playing");
    })
    .catch((error) => {
        console.log("فشل التشغيل:", error);
    });
}

function pauseAudio() {
    audio.pause();
    playing = false;
    icon.textContent = "🔇"; 
    musicBtn.classList.remove("playing");
}

musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playing) {
        pauseAudio();
    } else {
        playAudio();
    }
});

document.addEventListener("click", () => {
    if (!playing) {
        playAudio();
    }
}, { once: true });

audio.addEventListener("error", (e) => {
    console.log("خطأ في البث، جرب تحديث الصفحة");
    pauseAudio();
});
