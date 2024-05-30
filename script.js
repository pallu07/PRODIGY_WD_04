
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.checkValidity() || !email.checkValidity() || !message.checkValidity()) {
    return;
  }

  const mailtoUrl = `mailto:youremail@example.com?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)}`;

  window.location.href = mailtoUrl;
});