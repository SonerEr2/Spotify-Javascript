console.log("welcome");

let songIndex=0;
let audioElement = new Audio("bieber.mp3");
let masterPlay=document.getElementById("masterPlay")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName")
let songItem=Array.from(document.getElementsByClassName("songItem"))



let songs = [
    {
        songName: "Justin Bieber",
        filePath: "1.mp3",
        coverPath: "bieber.jpg"
    },
    {
        songName: "Aşk Yeniden Dizi Müzik",
        filePath: "2.mp3",
        coverPath: "askYeniden.jpg"
    },
    {
        songName: "Aydilge Kiralık Aşk Dizi",
        filePath: "3.mp3",
        coverPath: "KiralikAsk.jpg"
    },
    {
        songName: "Drama Köprüsü Hasan",
        filePath: "4.mp3",
        coverPath: "Drama.jpg"
    },
    {
        songName: "Emre Aydın",
        filePath: "5.mp3",
        coverPath: "Enbe.jpg"
    },
    {
        songName: "Gripin Durma Yağmur Durma",
        filePath: "6.mp3",
        coverPath: "Gripin.jpg"
    },
    {
        songName: "Müslüm Gürses Hangimiz Sevmedik",
        filePath: "7.mp3",
        coverPath: "Müslüm.jpg"
    },
    {
        songName: "Enbe Orkestrası İncir",
        filePath: "8.mp3",
        coverPath: "Enbe.jpg"
    },
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;


})
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle')
       gif.style.opacity=1

    }
    else{
        audioElement.pause()
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle')
       gif.style.opacity=0


    }

})


audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate")
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value=progress

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle')
        })
    
      
}
  

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        
    })

    }
)

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
       
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
       
})