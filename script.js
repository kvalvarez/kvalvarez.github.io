/////// NAVBAR ////////////////
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".fa-bars");
    const navMenu = document.querySelector("ul");
  
    menuIcon.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
  






const homeElement = document.querySelector('.Home');

// Function to fade in
function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    let fadeInInterval = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval); 
        }
    }, 100); 
}

// Function to fade out
function fadeOut(element) {
    let opacity = 1;
    let fadeOutInterval = setInterval(() => {
        opacity -= 0.05;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOutInterval); 
        }
    }, 100); 
}


function fadeCycle() {
    fadeOut(homeElement);
    setTimeout(() => {
        fadeIn(homeElement);
    }, 2000); 
}

window.onload = () => {
    fadeCycle();
};


/////// AWARENESS CARDS SWIPE
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const wrapper = document.getElementById('swiperWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
}

function swipe(direction) {
    if (direction === 'next' && currentIndex < totalCards - 1) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    }
    
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
    updateButtons();
}

updateButtons();


window.onload = () => {
    if (homeElement) {
        fadeCycle();
    }
};

if (wrapper && prevBtn && nextBtn) {
    updateButtons();

    prevBtn.addEventListener('click', () => swipe('prev'));
    nextBtn.addEventListener('click', () => swipe('next'));
}
