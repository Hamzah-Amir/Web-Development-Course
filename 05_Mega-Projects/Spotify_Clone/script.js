console.log("Lets Write JavaScript");

async function getSongs() {
    a = await fetch("http://127.0.0.1:5500/05_Mega-Projects/Spotify_Clone/songs/")
    let response = await a.text()
    let div = document.createElement("div") 
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")){
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
        song_ul.innerHTML = song_ul.innerHTML + `<li> ${song.replaceAll("%20"," ")} </li>`
    }

    const audio = new Audio("songs/" + songs[0])
    // audio.play()
}

// main()