translate();
var dem1 = 0; 
var dem2 = 0;
var dem3 = 0;
var dem7 = 0;
var dem8 = 0; 
var dem9 = 0;
function translate(){
    var x = document.getElementById('slider-scrolls');
  
    x.style.transform = 'translate3d(' + dem1 + 'px, 0px, 0px)';
    x.style.transition ='transform 1s ease'
    dem1 -= 1029;

    if(dem1 == -5145) dem1 = 0;
  
}
function translate1(){
    var x = document.getElementById('slick-list-z-btn');
    x.style.transform = 'translate3d(' + dem7 + 'px, 0px, 0px)';
    x.style.transition ='transform 1s ease'
    dem7 -= 1045;
    if(dem7 == -3135) dem7 = 0;
}
var h = setInterval(translate1, 2000);
var g = setInterval(translate, 4000);
function mouseOver(y){
    var x = document.getElementById('slider-scrolls');
    
    if(y == 0){
        x.style.transform = 'translateX(0px)';
        x.style.transition ='transform 1s ease';
        clearInterval(g);
       
    }
    else if(y == 1){
        x.style.transform = 'translateX(-1029px)';
        x.style.transition ='transform 1s ease';

    }
    else if(y == 2){
        x.style.transform = 'translateX(-2058px)';
        x.style.transition ='transform 1s ease';
     
    }
    else if(y == 3){
        x.style.transform = 'translateX(-3087px)';
        x.style.transition ='transform 1s ease';

    }
    else {
        x.style.transform = 'translateX(-4116px)';
        x.style.transition ='transform 1s ease';
       
    }
    clearInterval(g);
}

function mouseOut(x){
   if(x == 0){
    dem1 = -1029;
    var g = setInterval(translate, 4000);
   }
   else if(x == 1){
    dem1 = -2058;
    var g = setInterval(translate, 4000);
   }
   else if(x == 2){
    dem1 = -3087;
    var g = setInterval(translate, 4000);
   }
   else if(x == 3){
    dem1 = -4116;
    var g = setInterval(translate, 4000);
   }
   else{
    dem1 = 0;
    var g = setInterval(translate, 4000);
   };
   
}

function plusSlidesRight(x){
    if(dem8 == -2070) dem8 -= 0;
    else dem8 -= 1035;
    if(dem3 == -3135) dem3 -= 0;
    else  dem3 -= 1045;
    if(dem2 == -2090) dem2 -= 836;
    else if(dem2 == -2926) dem2 -= 0;
    else  dem2 -= 1045;
   if(x == 2){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(-627px)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
   w.style.cursor = 'pointer';
   }
   else if(x == 3){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(-209px)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
    w.style.cursor = 'pointer';
   }
   else if(x == 5){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(' + dem2 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem2 == -2926){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
    if(dem2 == -1045){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 6){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(' + dem3 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem3 == -3135){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
    if(dem3 == -1045){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 8){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX('+ dem8 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem8 == -2070){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
    if(dem8 == -1035){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 11){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right-z')[0];
    var w = document.getElementsByClassName('control-left-z')[0];
    y.style.transform = 'translateX(-1029px)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else if(x == 12){
    var y = document.getElementsByClassName('col-song-all-transform')[0];
    var q = document.getElementsByClassName('control-right-z')[1];
    var w = document.getElementsByClassName('control-left-z')[1];
    y.style.transform = 'translateX(-1029px)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else {
    var y = document.getElementsByClassName('slick-list')[x-1];
    var q = document.getElementsByClassName('control-right')[x - 1];
    var w = document.getElementsByClassName('control-left')[x - 1];
   
    y.style.transform = 'translateX(-1029px)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   
   }
  
  
}

function plusSlideLeft(x){
    
    if(dem8 == 0) dem8 += 0;
    else dem8 += 1035;
    if(dem3 == 0) dem3 += 0;
    else dem3 += 1045;
    if(dem2 == -836) dem2 += 836;
    else if(dem2 == 0) dem2 += 0;
    else  dem2 += 1045;
   if(x == 2){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(0)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else if(x == 3){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(0)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else if(x == 5){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(' + dem2 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem2 == 0){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
         w.style.cursor = 'pointer';
    }
    if(dem2 == -1881){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 6){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(' + dem3 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem3 == 0){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
         w.style.cursor = 'pointer';
    }
    if(dem3 == -2090){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 8){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(' + dem8 + 'px)';
    y.style.transition = 'transform 1s ease';
    if(dem8 == 0){
        q.style.opacity = '0.2';
        q.style.cursor = 'context-menu';
        w.style.opacity = '1';
         w.style.cursor = 'pointer';
    }
    if(dem8 == -1035){
        w.style.opacity = '1';
        w.style.cursor = 'pointer';
    }
   }
   else if(x == 11){
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right-z')[0];
    var q = document.getElementsByClassName('control-left-z')[0];
    y.style.transform = 'translateX(0)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else if(x == 12){
    var y = document.getElementsByClassName('col-song-all-transform')[0];
    var w = document.getElementsByClassName('control-right-z')[1];
    var q = document.getElementsByClassName('control-left-z')[1];
    y.style.transform = 'translateX(0)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
   else {
    var y = document.getElementsByClassName('slick-list')[x-1];
    var w = document.getElementsByClassName('control-right')[x - 1];
    var q = document.getElementsByClassName('control-left')[x - 1];
    y.style.transform = 'translateX(0)';
    y.style.transition = 'transform 1s ease';
    q.style.opacity = '0.2';
    q.style.cursor = 'context-menu';
    w.style.opacity = '1';
     w.style.cursor = 'pointer';
   }
}
function time(){
   var date = new Date();
   if(date.getDate() < 10) document.getElementById('time-on').innerHTML =  "0"  + date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear() + " " + (date.getHours() ) + ":" + date.getMinutes();
    if(date.getMonth() < 9) document.getElementById('time-on').innerHTML = date.getDate() + " / " + "0" + (date.getMonth() + 1) + " / " + date.getFullYear() + " " + (date.getHours() ) + ":" + date.getMinutes();
    if(date.getHours() < 10) document.getElementById('time-on').innerHTML = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear() + " 0" + (date.getHours() ) + ":" + date.getMinutes();
    if(date.getMinutes() < 10) document.getElementById('time-on').innerHTML = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear() + " " + (date.getHours() ) + ":0" + date.getMinutes();
}
setInterval(time, 1000);
var dem4 = 0;
var dem5 = 2;
function hoverCarousel(){
    if(dem4 == 0 && dem5 == 2){
        var x = document.getElementsByClassName('hover-carousel')[dem4];
    var y = document.getElementsByClassName('hover-carousel')[dem5];
    x.style.backgroundColor = 'rgba(255,255,255,.15)';
    x.style.borderRadius ='4px';
    y.style.backgroundColor = 'transparent';
        
    }
    else {
        var x = document.getElementsByClassName('hover-carousel')[dem4];
    var y = document.getElementsByClassName('hover-carousel')[dem5];
    x.style.backgroundColor = 'rgba(255,255,255,.15)';
    x.style.borderRadius ='4px';
    y.style.backgroundColor = 'transparent';
  
    }
    dem4++; dem5++;
    if(dem5 == 3) dem5 = 0;
    if(dem4 == 3) dem4 = 0;
}
var e = setInterval(hoverCarousel, 1500);

function hoverOn(x){
   var z = document.getElementsByClassName('chart-item')[x];
   var y = document.getElementsByClassName('chart-item')
   for(let i = 0; i < y.length; i++){
    y[i].style.backgroundColor = 'transparent';
}
  z.style.backgroundColor = 'rgba(255,255,255,.15)';
z.addEventListener('mouseout', ()=>{
    z.style.backgroundColor = 'transparent';
    
})

}

function hoverOff(x){
    if(x == 0){
      dem5 = 0;
       dem4 = 1;
      
    }
    else if(x == 1){
        dem5 = 1;
        dem4 = 2;
     
    }
    else{
        dem5 = 2;
        dem4 = 0;
       
    }

}
scaleImg();
function scaleImg(){
    var x = document.getElementsByClassName('player-actions');
    var y = document.getElementsByClassName('reset-height-z');
    var z = document.getElementsByClassName('image-song-in-col');
    var g = document.getElementsByClassName('row-block-song-transform-1');
    var h = document.getElementsByClassName('col-block-2')[0];
    for(let i = 0; i < x.length;i++){
        x[i].addEventListener('mouseover', ()=>{
     document.getElementsByClassName('image-opacity')[i].classList.toggle('scaleImg');
     x[i].style.cursor = 'pointer';
        })
        x[i].addEventListener('mouseout', ()=>{
            document.getElementsByClassName('image-opacity')[i].classList.toggle('scaleImg');
             })
    }   
    for(let i = 0; i < y.length;i++){
        y[i].addEventListener('mouseover', ()=>{
            document.getElementsByClassName('image-opacity')[i].classList.toggle('scaleImg');
            y[i].style.cursor = 'pointer';
               })
               y[i].addEventListener('mouseout', ()=>{
                   document.getElementsByClassName('image-opacity')[i].classList.toggle('scaleImg');
                    })
    }
    for(let i = 0; i < z.length;i++){
        z[i].addEventListener('mouseover', ()=>{
            document.getElementsByClassName('animation-play')[i].classList.toggle('scaleImg');
            z[i].style.cursor = 'pointer';
         
               })
               z[i].addEventListener('mouseout', ()=>{
                document.getElementsByClassName('animation-play')[i].classList.toggle('scaleImg');
                    })
    }
    for(let i = 0; i < g.length;i++){
        g[i].addEventListener('mouseover', ()=>{
            document.getElementsByClassName('image-opacity-z')[i].classList.toggle('scaleImg');
            g[i].style.cursor = 'pointer';
               })
               g[i].addEventListener('mouseout', ()=>{
                   document.getElementsByClassName('image-opacity-z')[i].classList.toggle('scaleImg');
                    })
    }
    h.addEventListener('mouseover', ()=>{
        document.getElementsByClassName('img-big')[0].classList.toggle('scaleImg');
        h.style.cursor = 'pointer';
           })
           h.addEventListener('mouseout', ()=>{
               document.getElementsByClassName('img-big')[0].classList.toggle('scaleImg');
                })
}
slickTrack();
function slickTrack(){
    let x = document.getElementsByClassName('slick-track')[0];
    x.style.transform = 'translateX('+ dem9+'px)';
    x.style.transition = 'transform 1s ease';
    dem9 -= 1050;
    if(dem9 == -7350) dem9 = 0;
}
var j = setInterval(slickTrack, 4000);

var x = document.getElementById('volume-releash');
x.addEventListener('mouseover', ()=>{
    var y = document.getElementsByClassName('volumn-up-blank')[0];
    var w = document.getElementById('myAudio');
    y.style.display = 'block';
})
x.addEventListener('mouseout', ()=>{
    var y = document.getElementsByClassName('volumn-up-blank')[0];
    y.style.display = 'none';
})
var w = document.getElementById('myAudio');
w.volume = 0.1;
var y = document.getElementById('volume-blacket');
y.addEventListener('change', ()=>{
    
    w.volume = y.value / 100;
    console.log(w.volume);
})

var songData =[
    {
    id : 0,
    srcSong: './js/a.mp3',
    longSong : "02:49",
    srcImg : 'https://tainhacvemay.biz/icon_baihat/2020/04/20/tai-nhac-moi-them-bai-hat-reality-vao-danh-sach-playlist-ve-dien-thoai.png',
    iconName : "fas fa-pause-circle fa-3x",
    nameSong:'Reality',
    artistSong1:'Lost Frequencies',
    secondOnEveryValue : 1.69,
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 1,
    srcSong: './js/case2.mp3',
    longSong : "03:28",
    srcImg : './img/case2.jpg',
    iconName : "fas fa-pause-circle fa-3x",
    secondOnEveryValue : 2.08,
    nameSong:'Bánh Mì Sữa Bò',
    artistSong1:'Dương Tử',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 2,
    longSong : "03:06",
    srcSong: './js/case3.mp3',
    srcImg : './img/case3.jpg',
    iconName : "fas fa-pause-circle fa-3x",
    secondOnEveryValue : 1.86,
    nameSong:'Hồng Chiêu Nguyện',
    artistSong1:'Cúc Tịnh Y',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 3,
    longSong : "03:09",
    srcSong: './js/case4.mp3',
    srcImg : './img/case4.jpg',
    secondOnEveryValue : 1.89,
    iconName : "fas fa-pause-circle fa-3x",
    nameSong:'Gặp Người Đúng Lúc',
    artistSong1:'Cao Tiến',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 4,
    longSong : "02:29",
    srcSong: './js/case5.mp3',
    srcImg : './img/case5.jpg',
    secondOnEveryValue : 1.69,
    iconName : "fas fa-pause-circle fa-3x",
    nameSong:'Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh',
    artistSong1:'Vương Thất Thất',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 5,
    longSong : "03:20",
    srcSong: './js/case6.mp3',
    srcImg : './img/case6.jpg',
    secondOnEveryValue : 2.00,
    iconName : "fas fa-pause-circle fa-3x",
    nameSong:'Đúng Lúc Gặp Gỡ Người',
    artistSong1:'Lý Ngọc Cương',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 6,
    longSong : "03:19",
    srcSong: './js/case7.mp3',
    srcImg : 'https://data.chiasenhac.com/data/cover/74/73504.jpg',
    iconName : "fas fa-pause-circle fa-3x",
    secondOnEveryValue : 1.99,
    nameSong:'Summer Love',
    artistSong1:'DEAMN',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 7,
    longSong : "03:36",
    srcSong: './js/case8.mp3',
    srcImg : './img/case8.jpg',
    iconName : "fas fa-pause-circle fa-3x",
    secondOnEveryValue : 2.16,
    nameSong:'Mang Chủng',
    artistSong1:'Triệu Phương Tịnh',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 8,
    longSong : "03:48",
    srcSong: './js/case9.mp3',
    srcImg : './img/case9.jpg',
    iconName : "fas fa-pause-circle fa-3x",
    secondOnEveryValue : 2.28,
    nameSong:'Không Chỉ Là Thích',
    artistSong1:'Tôn Ngữ Trại',
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 9,
    longSong : "05:33",
    srcSong: './js/case10.mp3',
    srcImg : './img/case10.jpg',
    secondOnEveryValue : 3.33,
    nameSong:'Lạnh Lẽo',
    artistSong1:'Aska Yang',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 10,
    longSong : "02:48",
    srcSong: './js/case11.mp3',
    srcImg : './img/case11.jpg',
    secondOnEveryValue : 1.68,
    nameSong:'Lữ Khách Qua Thời Gian',
    artistSong1:'Danh Quyết',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 11,
    longSong : "04:05",
    srcSong: './js/case12.mp3',
    srcImg : './img/case12.jpg',
    secondOnEveryValue : 2.45,
    nameSong:'Ác Ma Đến Từ Thiên Đường',
    artistSong1:'Đặng Tử Kỳ',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 12,
    longSong : "03:05",
    srcSong: './js/case13.mp3',
    srcImg : './img/case13.jpg',
    secondOnEveryValue : 1.85,
    nameSong:'Tâm Lặng Như Nước',
    artistSong1:'Ice Paper',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 13,
    longSong : "03:50",
    srcSong: './js/case14.mp3',
    srcImg : './img/case14.jpg',
    secondOnEveryValue : 2.30,
    nameSong:'Tay Trái Chỉ Trăng',
    artistSong1:'Tát Đỉnh Đỉnh',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},
{
    id : 14,
    longSong : "04:04",
    srcSong: './js/case15.mp3',
    srcImg : './img/case15.jpg',
    secondOnEveryValue : 2.44,
    nameSong:'Đồng Thoại',
    artistSong1:'Michael Wong',
    iconName : "fas fa-pause-circle fa-3x",
    iconNamePause : 'fas fa-play-circle fa-3x',
},

]
var timedead = document.getElementById('duration-time');
var ballSlider = document.getElementById('ball-slider');
let  icon = document.getElementById('Play-z-song');
var w = document.getElementById('myAudio');
var cd = 0;
function releashSong(x){
    var g = document.getElementsByClassName('Play-music')[0];
    g.style.display = 'block';
    m = 0; n = 0;
    var a = document.getElementById('changeImg');
    var b = document.getElementById('changeNameSong1');
    var c = document.getElementById('changeArtist1');
    var d = document.getElementById('changeArtist2');
    let  icon = document.getElementById('Play-z-song');
    var timedead = document.getElementById('duration-time');
    var ballSlider = document.getElementById('ball-slider');
    cd = 0;
    icon.className = "fas fa-pause-circle fa-3x";
    ballSlider.value = cd;
    let next = document.getElementById('Next-disable');
 switch(x){
     case 1:case 2: case 3 : case 4 : case 5 : case 6 : case 7 : case 8: case 9 : case 10 : case 11 : case 12 : case 13 : case 14 : case 15:{
        
        w.src = songData[x-1].srcSong;
        a.src = songData[x-1].srcImg;
        b.innerHTML = songData[x-1].nameSong;
        c.innerHTML = songData[x-1].artistSong1;
        timedead.innerHTML = songData[x-1].longSong;
        w.play();
        ballSliderRun(x-1);
        timeRunSong(x-1);
        ballSlider.addEventListener('click', ()=>{
            clickToSkip(x-1);
        });
        icon.addEventListener('click', pauseOfPlay);
        next.addEventListener('click', ()=>{
            Next(x);
        })
        changeColor(x-1);
        break;
     }
     
    
 }
}

function Next(x){
    if(x == 15){
        releashSong(0);
    }
    else releashSong(x+1);
    
}
let color = document.getElementsByClassName('col-song-z-btn');
function changeColor(x){
    
  for(let i = 0; i < color.length;i++){
      if(x == i) {
       
        color[i].style.backgroundColor = '#3a066b';
        color[i].addEventListener('mouseover', ()=>{
            color[i].style.backgroundColor = '#2a1b39';
        })
        x1 = x;
        color[i].addEventListener('mouseout', ()=>{
           if(x1 == x){
      
            color[i].style.backgroundColor = '#3a066b';
           }
           
           else color[i].style.backgroundColor = 'transparent';
          })
          
      }
      else color[i].style.backgroundColor = 'transparent';
  }
}
mouseOverAndOutOnSong();
function mouseOverAndOutOnSong(){
    for(let i = 0; i < color.length;i++){
        color[i].addEventListener('mouseover', ()=>{
            color[i].style.backgroundColor = '#2a1b39';
        })
        color[i].addEventListener('mouseout', ()=>{
          color[i].style.backgroundColor = 'transparent';
        })
    }
}

function ballSliderRun(x){
    
    if(icon.className == songData[x].iconName && timedead.innerHTML == songData[x].longSong){
        cd += 1;
        ballSlider.value = cd;
     
        if(ballSlider.value == '100' && x != 14) releashSong(x+2);
        if(ballSlider.value == '100' && x == 14) releashSong(1);
    }
    else{
        clearInterval(()=>{
            ballSliderRun(x);
        });
    }
}
setInterval(function(){
    ballSliderRun(0);
},  songData[0].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(1);
},  songData[1].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(2);
},  songData[2].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(3);
},  songData[3].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(4);
},  songData[4].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(5);
},  songData[5].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(6);
},  songData[6].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(7);
},  songData[7].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(8);
},  songData[8].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(9);
},  songData[9].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(10);
},  songData[10].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(11);
},  songData[11].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(12);
},  songData[12].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(13);
},  songData[13].secondOnEveryValue * 1000);
setInterval(function(){
    ballSliderRun(14);
},  songData[14].secondOnEveryValue * 1000);
var m = 0, n = 0;
function timeRunSong(x){
    if(icon.className == songData[x].iconName && timedead.innerHTML == songData[x].longSong){
        m ++;
        if(m == 60){
            m = 0;
            n ++;
        }
        if(m == 49 && n == 2){
            clearInterval(()=>{
                timeRunSong(x);
            });
        }
       else{
           if(m < 10){
            document.getElementById('playing-time').innerHTML = '0' + n + ':0' + m;
           }
           else document.getElementById('playing-time').innerHTML = '0' + n + ':' + m;
       }
    }
    else{
        clearInterval(()=>{
            timeRunSong(x);
        });
    }
}
setInterval(function(){
    timeRunSong(0);
}, 1000);
setInterval(function(){
    timeRunSong(1);
}, 1000);
setInterval(function(){
    timeRunSong(2);
}, 1000);
setInterval(function(){
    timeRunSong(3);
}, 1000);
setInterval(function(){
    timeRunSong(4);
}, 1000);
setInterval(function(){
    timeRunSong(5);
}, 1000);
setInterval(function(){
    timeRunSong(6);
}, 1000);
setInterval(function(){
    timeRunSong(7);
}, 1000);
setInterval(function(){
    timeRunSong(8);
}, 1000);
setInterval(function(){
    timeRunSong(9);
}, 1000);
setInterval(function(){
    timeRunSong(10);
}, 1000);
setInterval(function(){
    timeRunSong(11);
}, 1000);
setInterval(function(){
    timeRunSong(12);
}, 1000);
setInterval(function(){
    timeRunSong(13);
}, 1000);
setInterval(function(){
    timeRunSong(14);
}, 1000);

function clickToSkip(x){
            cd = parseInt(ballSlider.value);
        w.currentTime =  ballSlider.value * songData[x].secondOnEveryValue;
      if(w.currentTime >= 60){
          n = parseInt(w.currentTime / 60);
          m = parseInt(w.currentTime % 60);
          if(m < 10){
            document.getElementById('playing-time').innerHTML = '0' + n + ':0' + m;
           }
           else document.getElementById('playing-time').innerHTML = '0' + n + ':' + m;
       
    }
      
      else{
          n = 0;
          m = parseInt(w.currentTime);
          if(m < 10){
            document.getElementById('playing-time').innerHTML = '0' + n + ':0' + m;
           }
           else document.getElementById('playing-time').innerHTML = '0' + n + ':' + m;
       }
}

function pauseOfPlay(){
    if(icon.className == songData[0].iconName){
        w.pause();
        icon.className = songData[0].iconNamePause;
        console.log(icon.className);
    }
    else{
        w.play();
        icon.className = songData[0].iconName;
    }
}

