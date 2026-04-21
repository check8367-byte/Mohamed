const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");

// رابط مباشر وآمن (HTTPS)
const stream = "https://backup.quran.com.kw/quraan";

let playing = false;
audio.src = stream;

function togglePlay() {
    if (playing) {
        audio.pause();
        musicBtn.innerHTML = "<span>🔇</span>";
        playing = false;
    } else {
        audio.play().then(() => {
            playing = true;
            musicBtn.innerHTML = "<span>🔊</span>";
        }).catch(err => {
            console.log("اضغط مرة تانية للتشغيل");
        });
    }
}

// تشغيل عند الضغط على الزرار
musicBtn.addEventListener("click", togglePlay);

// تشغيل احتياطي عند أول لمسة للشاشة (عشان المتصفح يسمح بالصوت)
document.addEventListener("click", () => {
    if (!playing) {
        togglePlay();
    }
}, { once: true });
