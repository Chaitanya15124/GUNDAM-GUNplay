document.addEventListener('DOMContentLoaded', function () {
  // Change tagline after 5 seconds
  setTimeout(function () {
    const tagline = document.querySelector('.tagline');
    if (tagline) {
      tagline.textContent = 'Build Your Legacy, One Model at a Time!';
    }
  }, 5000);

  // Alert on "Buy Now" click
  const buyButtons = document.querySelectorAll('.buy');
  buyButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      alert('Thank you for your interest! Redirecting you to WhatsApp...');
    });
  });
});
