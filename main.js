// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active1');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active1');
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove Toggle Icon and Navbar (on scroll)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Read More toggle in Home section
document.getElementById('span1')?.addEventListener('click', function () {
    document.getElementById('description-box')?.classList.toggle('active');
});

// Read more in About section
function changeReadMore1() {
    const mycontent = document.getElementById('mybox1id');
    const mybutton = document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
}

// Read more in Academic Achievements
function changeReadMore2() {
    const mycontent = document.getElementById('mybox2id');
    const mybutton = document.getElementById('mybuttonid2');

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
}

// Contact Form Submission (Note: your credentials should be hidden in production)
const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "amt85200@gmail.com",
        Password: "C3F15F0F7B613E42340E32901EEB1403FC93",
        To: 'vermasujal16@gmail.com',
        From: "amt85200@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: `
            Name: ${document.getElementById("name").value}<br>
            Email: ${document.getElementById("email").value}<br>
            Phone No: ${document.getElementById("phone").value}<br>
            Message: ${document.getElementById("msg").value}
        `
    }).then(
        message => alert("Message Sent Successfully!")
    );
}

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});

// ScrollReveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// 🌙 Dark/Light Mode Toggle
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Icon toggle
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // Save user preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// 🌙 Apply stored mode on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeIcon?.classList.replace('fa-moon', 'fa-sun');
    }
});


