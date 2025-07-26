console.log("Lets Write JavaScript");
let currentSong = new Audio()
let songs;

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    
    // Pad with leading zero if needed
    let formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    return formatted;
}


function playMusic(track, pause=false) {
    currentSong.src = "songs/" + track
    if(!pause){
        currentSong.play()
        play.querySelector("img").src = "assets/pause.svg"
    }   
    document.querySelector(".songname").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function getSongs() {
    let response = await fetch("http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/")
    let text = await response.text()
    let div = document.createElement("div")
    div.innerHTML = text;
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
    playMusic(songs[0], true)
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
        
        // Update the position of the seekbar circle as the song progresses
        let circle = document.querySelector(".circle")
        let progress = (currentSong.currentTime / currentSong.duration)*100
        circle.style.left = `${progress}%`
    })
    
    let seekbar = document.querySelector(".seek-bar")
    seekbar.addEventListener("click", (e) =>{
        let circle = document.querySelector(".circle")
        let progress = (e.offsetX / seekbar.clientWidth) * 100;
        circle.style.left = `${progress}%`
        currentSong.currentTime = (progress * currentSong.duration) /100 
    })

    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0"  
    })
    
    document.querySelector(".cross").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-100%"  
    })

    // Event listener for previous song
    document.querySelector(".prev-song").addEventListener("click",() =>{
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])   
        console.log(index);
        if (index-1 >=0){
            playMusic(songs[index-1])
        }             
    })
    // Event listener for next song
    document.querySelector(".next-song").addEventListener("click",() =>{
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        console.log(index);
        if ((index+1) < songs.length)
            playMusic(songs[index+1])
    })

    // Event for Volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) =>{
        console.log("setting volume to", e.target.value);
        volume = (e.target.value) / 100
        currentSong.volume = volume
    })

    document.querySelector(".vol").addEventListener("click", () => {
        currentSong.volume = 0;
        document.querySelector(".range input").value = 0;
    });
    
}

main()