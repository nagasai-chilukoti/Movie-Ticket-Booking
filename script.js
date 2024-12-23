document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-btn');
    const bookingForm = document.getElementById('booking-form');

    // Show booking form on button click
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            bookingForm.classList.remove('hidden');
            // You can customize this part to load specific movie details into the form
        });
    });
    // Handle form submission (you'll need backend code for this)
    const bookingFormElement = document.getElementById('movie-booking-form');
    bookingFormElement.addEventListener('submit', function(event) {
        event.preventDefault();

        // Example: Fetch form data and send it to backend
        const formData = new FormData(bookingFormElement);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Example: Send data to server (replace with actual backend handling)
        console.log('Form Data:', data);
        alert('Booking Confirmed!'); // Replace with actual feedback or redirection
    });
});