const keys = document.getElementsByClassName("key");
const audio = document.getElementById("audio");
const array = Array.from(keys);

array.forEach(e => {
    e.onclick = () => {
        const key = e.getAttribute('data')
        audio.src = `./${key}.mp3`;
        audio.play();
    }
})