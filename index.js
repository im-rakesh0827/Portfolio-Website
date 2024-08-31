let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100,
});
ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , . skills-container , .project-box,.contact form', { origin: 'bottom' });

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form input values
        const fullName = document.getElementById('fullName').value;
        const emailAddress = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const emailSubject = document.getElementById('emailSubject').value;
        const message = document.getElementById('message').value;

        // Display an alert with form data
        const formData = `Full Name: ${fullName}\nEmail Address: ${emailAddress}\nMobile Number: ${mobileNumber}\nEmail Subject: ${emailSubject}\nYour Message: ${message}`;
        alert("Form submitted with the following data:\n" + formData);

        // Reset form inputs
        contactForm.reset();
    });
});

