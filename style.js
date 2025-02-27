// The Element Of Ul item
const ul = document.getElementById("item")
// The Icon List
const iconList = document.getElementById("par")

ul.style.maxHeight = "0px"

iconList.addEventListener("click", () => {
    if (ul.style.maxHeight === "0px") {
        ul.style.maxHeight = "300px"
    } else {
        ul.style.maxHeight = "0px"
    }
})

// For Scroll animation
const display = new IntersectionObserver((add) => {
    add.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("show")
        } else {
            item.target.classList.remove("show")
        }
    })
})
// The animation Element 
let allAnimation = document.querySelectorAll(".animation");
allAnimation.forEach((el) => display.observe(el));
// countObserver.observe(section)

// For counting numbers

const section = document.querySelector(".count");
const numbers = document.querySelectorAll(".number");
let  started = false;

window.onscroll = () => {
    if(window.scrollY >= section.offsetTop){
        if(!started) {
            numbers.forEach((num) => startCount(num))
        }
        started = true;
    }
}

function startCount (el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent === goal) {
            clearInterval(count)
        }
    } ,1000 / goal)
}

// Swiper section
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView:1
        },
        620: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }

    });
    // footer
    // Example JavaScript to add functionality
document.querySelector('.input-container button').addEventListener('click', function() {
    const inputValue = document.querySelector('.input-container input').value;
    if (inputValue) {
        alert(`You entered: ${inputValue}`);
    } else {
        alert('Please enter something!');
    }
});