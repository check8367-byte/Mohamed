<!-- === الجزء الخاص ببث القرآن الكريم الحي فقط (الزر + الصوت + السكريبت) === -->
<!-- أضف هذا الكود في مكانه المناسب في صفحتك -->

<!-- 1. زر التشغيل (ضعه في أي مكان في <body>) -->
<div class="music-btn" id="musicBtn"><span>🔇</span></div>

<!-- 2. عنصر الصوت (ضعه قبل </body>) -->
<audio id="audio"></audio>

<!-- 3. الـ CSS (أضفه داخل <style> أو في ملف CSS منفصل) -->
<style>
.music-btn{
  position:fixed;
  top:15px;
  right:15px;
  width:34px;
  height:34px;
  background:rgba(0,0,0,.7);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  z-index:999;
  box-shadow:0 0 10px rgba(0,0,0,.5);
}
.music-btn.playing{
  animation:pulse 1.4s infinite;
}
@keyframes pulse{
  0%{box-shadow:0 0 0 0 rgba(34, 197, 151, .4)}
  70%{box-shadow:0 0 0 10px rgba(34, 197, 151, 0)}
  100%{box-shadow:0 0 0 0 rgba(34, 197, 151, 0)}
}
</style>

<!-- 4. الـ JavaScript (ضعه قبل </body>) -->
<script>
const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("span");
const stream = "https://qurango.net/radio/saud_alshuraim";  // رابط البث المباشر

let playing = false;

function playAudio() {
  if (!playing) {
    audio.src = stream;
    audio.volume = 0.7;           // يمكنك تغيير الصوت (0.0 - 1.0)
    audio.play()
      .then(() => {
        playing = true;
        icon.textContent = "🔊";
        musicBtn.classList.add("playing");
      })
      .catch(err => console.log("خطأ في التشغيل:", err));
  }
}

musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (playing) {
    audio.pause();
    playing = false;
    icon.textContent = "🔇";
    musicBtn.classList.remove("playing");
  } else {
    playAudio();
  }
});

// تشغيل تلقائي عند أول نقرة في الصفحة (اختياري)
document.addEventListener("click", playAudio, { once: true });
</script>