console.log("connected")






let ppre = document.querySelector('.ppre');
let pnext = document.querySelector('.pnext');
let actualsong = document.querySelector('.actualsongs');

pnext.addEventListener('click', () => {
    actualsong.scrollLeft += 150;
})

ppre.addEventListener('click', () => {
    actualsong.scrollLeft -= 150;
})

let apre = document.querySelector('.apre');
let anext = document.querySelector('.anext');
let artistarrow = document.querySelector('.artistarrow');

anext.addEventListener('click', () => {
    artistarrow.scrollLeft += 90;
})

apre.addEventListener('click', () => {
    artistarrow.scrollLeft -= 90;
})


let m = new Audio(`/audio/1.mp3`)
// m.play(); 








// music.currentTime = 0




const songs = [{
    id: "1",
    song: 'Love Yourz <br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">J Cole</div>',
    poster: "img1.png",
},
{
    id: "2",
    song: 'CAROUSEL<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Travis Scott</div>',
    poster: "img2.png",
},
{
    id: "3",
    song: 'Wants and Needs (feat. Lil Baby)<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Drake</div>',
    poster: "img3.png",
},
{
    id: "4",
    song: 'No Friends In The Industry<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Drake</div>',
    poster: "img4.png",
},
{
    id: "5",
    song: 'Life Is Good<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Future</div>',
    poster: "img5.png",
},
{
    id: "6",
    song: 'Wolves ft. Post Malone<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Big Sean</div>',
    poster: "img6.png",
},
{
    id: "7",
    song: 'Middle Child<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">J Cole</div>',
    poster: "img7.png",
},
{
    id: "8",
    song: 'Popstar<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">DJ Khaled, Drake</div>',
    poster: "img8.png",
},
{
    id: "9",
    song: 'GREECE<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">DJ Khaled, Drake</div>',
    poster: "img9.png",
},
{
    id: "10",
    song: 'Starboy<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">The Weeknd</div>',
    poster: "img10.png",
},
{
    id: "11",
    song: 'Black Panther<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Kendrick Lamar</div>',
    poster: "img11.png",
},
{
    id: "12",
    song: 'Save Your Tears<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">The Weeknd</div>',
    poster: "img12.png",
},

{
    id: "13",
    song: 'BUTTERFLY EFFECT<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Travis Scott</div>',
    poster: "img13.png",
},
{
    id: "14",
    song: 'Going Bad<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Meek Mill</div>',
    poster: "img14.png",
},
{
    id: "15",
    song: 'HUMBLE.<br> <div class="singer text-[#4c5262] overflow-hidden text-ellipsis">Kendrick Lamar</div>',
    poster: "img15.png",
},
];


Array.from(document.getElementsByClassName('songs')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = `/img/img${i + 1}.png`
    e.getElementsByClassName('songname')[0].innerHTML = songs[i].song
})


let playpause = document.getElementById('playpause');
playpause.addEventListener('click', (e) => {
    if (m.paused || m.currentTime <= 0) {
        playpause.innerHTML = `<svg style="fill: white;" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>`
        m.play();
    }
    else {
        playpause.innerHTML = `<svg style="fill: white;"   height="16" width="16"viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>`
        m.pause();
    }
})



let music = document.querySelectorAll('.play')
music.forEach(mus => {
    mus.addEventListener('click', (e) => {
        m.src = `/audio/audio/${mus.id}.mp3`
        m.play();
        let masterimg = document.querySelector('.masterimg');
        masterimg.src = `/img/img${mus.id}.png`

        playpause.innerHTML = `<svg style="fill: white;" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>`


        let mastersongname = document.querySelector('.mastersongname');
        let masternamesinger = document.querySelector('.masternamesinger');
        let singer = document.querySelectorAll('.songname .singer');
        let fullsong = songs[mus.id - 1].song
        mastersongname.innerHTML = fullsong.split('<br>')[0]
        masternamesinger.innerHTML = singer[mus.id - 1].innerHTML
    })

});



m.addEventListener('timeupdate', (e) => {


    let ctrtime = document.querySelector('.ctrtime')
    let finaltime = document.querySelector('.finaltime')
    
    
    let dur = m.duration
    let ctr = m.currentTime
    
    
    
    
    finaltime.innerHTML = ` ${Math.floor(dur/60)}:${Math.floor(dur%60)}`
    
    
    ctrtime.innerHTML = `${Math.floor(ctr/60)}:${Math.floor(ctr%60)}`
    
    let pp = Math.floor((ctr/dur)*100);
    
    
    
    let seekbar = document.querySelector('.seekbar')
    seekbar.value = parseInt(pp)
    

    console.log(seekbar.value)
    



})