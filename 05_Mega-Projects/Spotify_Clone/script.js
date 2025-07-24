console.log("Lets Write JavaScript");
let currentSong = new Audio()

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    
    // Pad with leading zero if needed
    let formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    return formatted;
}


function playMusic(track) {
    // let audio = new Audio()
    currentSong.src = "songs/" + track
    currentSong.play()
    play.querySelector("img").src = "assets/pause.svg"
    document.querySelector(".songname").innerHTML = track
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function getSongs() {
    a = await fetch("http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}

async function main() {
    let songs = await getSongs()
    console.log(songs);
    let song_ul = document.querySelector(".song-list").getElementsByTagName("ul")[0]
    for (const song of songs) {
        song_ul.innerHTML = song_ul.innerHTML + `<li><img class="invert" src="assets/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Hamza</div>
                            </div>
                            <div class="playnow">
                                <span>Play now</span>
                                <img class="invert" src="assets/play.svg" alt="">
                            </div></li>`
    }
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    let play = document.getElementById("play");

    // Attach event litener for next, previous and playing sound
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.querySelector("img").src = "assets/pause.svg"
        }
        else {
            currentSong.pause()
            play.querySelector("img").src = "assets/play.svg"
        }
    })

    // listen for timeupdate event
    currentSong.addEventListener("timeupdate", () =>{
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)}:${formatTime(currentSong.duration)}`
    })

    // Update the position of the seekbar circle as the song progresses
    currentSong.addEventListener("timeupdate", ()=>{
        let progress = (currentSong.currentTime / currentSong.duration)*100
        let circle = document.querySelector(".circle")
        circle.style.left = `${progress}%`
    })

}

main()