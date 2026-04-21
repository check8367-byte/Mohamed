// بث الإذاعة (رابط البث المباشر الجديد)
const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("span");

// الرابط الجديد اللي طلبته
const stream = "http://live.mp3quran.net:8006/;stream.mp3";

let playing = false;

// إعدادات الصوت
audio.src = stream;
audio.volume = 0.8;
audio.preload = "none";

function playAudio() {
    audio.play()
    .then(() => {
        playing = true;
        icon.textContent = "🔊"; 
        musicBtn.classList.add("playing");
    })
    .catch((error) => {
        console.log("حدث خطأ أو منع التشغيل التلقائي:", error);
    });
}

function pauseAudio() {
    audio.pause();
    playing = false;
    icon.textContent = "🔇"; 
    musicBtn.classList.remove("playing");
}

// زر التشغيل والإيقاف
musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playing) {
        pauseAudio();
    } else {
        playAudio();
    }
});

// التشغيل عند أول تفاعل للمستخدم مع الصفحة
document.addEventListener("click", () => {
    if (!playing) {
        playAudio();
    }
}, { once: true });

// التعامل مع أخطاء السيرفر
audio.addEventListener("error", () => {
    console.log("خطأ في تحميل البث");
    pauseAudio();
});
