const cursor = document.querySelector('.cursor');
const animImg = document.querySelector('.anim-img');
const animWrapper = document.querySelector('.anim-wrapper');
const animHeader = document.querySelector('.anim-h2-wrapper');
const light = document.querySelector('.light');
const kickAudio = document.querySelector('.on-sound');


animWrapper.addEventListener('click', (e) => {
    if(animWrapper.classList.contains('lightOn')){
        animWrapper.classList.remove('lightOn');
        light.style.opacity = 0;
        cursor.style.opacity = 1;
        animHeader.style.opacity = 1;
        kickAudio.play();
    }else{
        animWrapper.classList.add('lightOn');
        window.addEventListener('mousemove', (e) => {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
    });
    light.style.opacity = 1;
    cursor.style.opacity = 0;
    animHeader.style.opacity = 0;
    kickAudio.play();
    }
});

window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
});


