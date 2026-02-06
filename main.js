// JavaScript code for interactivity
console.log('Welcome to my portfolio!');

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.projects-grid').scrollIntoView({ behavior: 'smooth' });
});

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key from EmailJS

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const from_name = document.getElementById('from_name').value;
        const from_email = document.getElementById('from_email').value;
        const message = document.getElementById('message').value;

        // Reset message
        formMessage.textContent = '';
        formMessage.className = 'form-message';

        try {
            // Send email using EmailJS
            const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: from_name,
                from_email: from_email,
                message: message,
                to_email: 'shakhawatshovo2001@gmail.com'
            });

            if (response.status === 200) {
                // Success
                formMessage.textContent = '✓ Message sent successfully! Thank you for contacting me.';
                formMessage.classList.add('success');
                
                // Clear form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            formMessage.textContent = '✗ Failed to send message. Please try again later.';
            formMessage.classList.add('error');
            
            // Hide error after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        }
    });
}
