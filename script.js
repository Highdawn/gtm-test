document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Normally you would send form data via fetch/ajax here

  // Trigger a custom event for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'formSubmission'
  });

  alert('Form submitted successfully!');
});
