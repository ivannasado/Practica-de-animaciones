const images = document.querySelectorAll('.hero__figure');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting);
    })
}

const options ={
    root: null,
    rootmargin: "0px",
    threshold: 0.25
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})



const texts = document.querySelectorAll('.hero__text');

function triggerAnimation2(entries){
    entries.forEach(entry =>{
        const text = entry.target.querySelector('h3');

        text.classList.toggle('unset', entry.isIntersecting);
    })
}

const options2 ={
    root: null,
    rootmargin: "0px",
    threshold: 0.25
}

const observer2 = new IntersectionObserver(triggerAnimation2, options2);

texts.forEach(text =>{
    observer2.observe(text);
})


const texts1 = document.querySelectorAll('.text');

function triggerAnimation3(entries){
    entries.forEach(entry =>{
        const linea = entry.target.querySelector('h4');

        linea.classList.toggle('unset', entry.isIntersecting);
    })
}

const options3 ={
    root: null,
    rootmargin: "0px",
    threshold: 0.25
}

const observer3 = new IntersectionObserver(triggerAnimation3, options3);

texts1.forEach(linea =>{
    observer3.observe(linea);
})