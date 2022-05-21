console.log("Welcome to spotify");
//Initialize the variables

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Maa tujhe salam", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "Yaarian-- ABCD", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "dil diya galla", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "naach meri jaana", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "Raabta", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "channa mereya", filePath: "songs/6.mp3", coverPath: "6.jpg"},
    {songName: "teri mitti", filePath: "songs/7.mp3", coverPath: "7.jpg"},
    {songName: "tujhse naraz nahi zindagi", filePath: "songs/8.mp3", coverPath: "8.jpg"},
    {songName: "Girl i need you", filePath: "songs/9.mp3", coverPath: "9.jpg"},
    {songName: "Bruno mars-marry you", filePath: "songs/10.mp3", coverPath: "10.jpg"},

]

songItems.forEach((element,i)=>{
    //console.log(element,i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//audioElement.play
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');  

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play(); 
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
    })
}) 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else {
    songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath ;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play(); 
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else {
    songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath ;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play(); 
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})
