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
    
    // Here you would typically send this data to your server
    // For now, we'll just show a success message
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    
    // Clear the form
    document.getElementById('quoteForm').reset();
    
    return false;
} 