console.log("Lets Write JavaScript");
let currentSong = new Audio()
let songs;
let currFolder;

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    // Pad with leading zero if needed
    let formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    return formatted;
}


function playMusic(track, pause = false) {
    currentSong.src = `${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.querySelector("img").src = "assets/pause.svg"
    }
    document.querySelector(".songname").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}


async function getSongs(folder) {
    currFolder = folder;
    let response = await fetch(`http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/${folder}/`)
    let text = await response.text()
    let div = document.createElement("div")
    div.innerHTML = text;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`${folder}/`)[1])
        }
    }

    // Show all songs in playlist}
    let songul = document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML = ''
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li><img src="assets/music.svg" class="invert" width="34" alt="Music">
        <div class="info">
        <div> ${song.replaceAll("%20", " ")}</div>
        <div>Hamza</div>
        </div>
        <div class="playnow">
        <span>Play Now</span>
        <img src="assets/play.svg" class="invert" alt="">
        </div></li>`
    }

    // Attach am event listener to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    return songs
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let anchors = div.getElementsByTagName("a")
    let folder = []
    let array = Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            
        if (e.href.includes("/songs/") && e.href !== "http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/") {
            let folder = e.href.split("/").slice(-1)[0]
            // Get meta data of each folder
            let a = await fetch(`http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/${folder}/info.json`)
            let response = await a.json()
            let cardcontainer = document.querySelector(".cardcontainer")
            cardcontainer.innerHTML = cardcontainer.innerHTML + `  <div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                color="#ffffff" fill="black">
                                <path
                                    d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="songs/${folder}/cover.jpg" alt="Cover">
                        <h3>${response.title}</h3>
                        <p>${response.description}</p>
                    </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click",async item=>{
            console.log("Fetching Songs");
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })
}

async function main() {
    // Get list of all Songs
    await getSongs("songs/cs")
    playMusic(songs[0], true)

    // Display all the albums on the page.
    displayAlbums()


    // Attach event litener for next, previous and playing sound
    let play = document.getElementById("play");
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
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)}:${formatTime(currentSong.duration)}`

        // Update the position of the seekbar circle as the song progresses
        let circle = document.querySelector(".circle")
        let progress = (currentSong.currentTime / currentSong.duration) * 100
        circle.style.left = `${progress}%`
    })

    let seekbar = document.querySelector(".seek-bar")
    seekbar.addEventListener("click", (e) => {
        let circle = document.querySelector(".circle")
        let progress = (e.offsetX / seekbar.clientWidth) * 100;
        circle.style.left = `${progress}%`
        currentSong.currentTime = (progress * currentSong.duration) / 100
    })

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%"
    })

    // Event listener for previous song
    document.querySelector(".prev-song").addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if (index - 1 >= 0) {
            playMusic(songs[index - 1])
        }
    })
    // Event listener for next song
    document.querySelector(".next-song").addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length)
            playMusic(songs[index + 1])
    })

    // Event for Volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("setting volume to", e.target.value);
        volume = (e.target.value) / 100
        currentSong.volume = volume
    })

    // Add event listener to mute the track
    document.querySelector(".vol").addEventListener("click", (e) => {
        if (e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg","mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range input").value = 0;
        }
        else{
            currentSong.volume = 0.2
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            document.querySelector(".range input").value = 10;
        }
    })
}

main()