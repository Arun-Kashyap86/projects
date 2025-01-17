const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slider = document.querySelector('.slider');
const imgs=document.querySelectorAll('.img');
var slideNo=1;
var len=imgs.length;

const nextSlide=()=>{
    slider.style.transform=`translateX(-${slideNo*530}px)`;
        slideNo++;
}
const getFirstSlide=()=>{
    slider.style.transform=`translateX(0px)`;
        slideNo=1;
}
const prevSlide=()=>{
    slider.style.transform=`translateX(-${(slideNo-1)*530}px)`;
        slideNo--;
}
const getLastSlide=()=>{
    slider.style.transform=`translateX(-${(len-1)*530}px)`;
        slideNo=len-1;
}

next.addEventListener('click', ()=>{
    slideNo<len?nextSlide():getFirstSlide();
});

prev.addEventListener('click', ()=>{
    
    slideNo>1?prevSlide():getLastSlide();
});



//start auto slider
let slideInterval;

const startSlideShow=()=>{
    slideInterval=setInterval(()=>{
        slideNo<len? nextSlide():getFirstSlide();
    },2000);
}

const stopSlideShow = () =>{
    clearInterval(slideInterval);
};

startSlideShow();
slider.addEventListener('mouseover',stopSlideShow);
slider.addEventListener('mouseout',startSlideShow);
next.addEventListener('mouseover',stopSlideShow);
next.addEventListener('mouseout',startSlideShow);
prev.addEventListener('mouseover',stopSlideShow);
prev.addEventListener('mouseout',startSlideShow);
