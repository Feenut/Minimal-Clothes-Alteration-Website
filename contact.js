function submitForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Form validation for better user experience
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Here you would typically send this data to your server
    // For now, we'll just show a success message
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    
    // Clear the form
    document.getElementById('contactForm').reset();
    
    // Track form submission for analytics (if you have analytics set up)
    if (typeof gtag === 'function') {
        gtag('event', 'form_submission', {
            'event_category': 'Contact',
            'event_label': formData.service
        });
    }
    
    return false;
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitForm);
    }
}); 