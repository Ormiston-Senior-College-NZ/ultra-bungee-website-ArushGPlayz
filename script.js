// Validate time input for specific times
document.querySelector('.book-now').addEventListener('submit', function (event) {
    const timeInput = document.getElementById('time').value;
    const allowedTimes = ['10:00', '12:00', '14:00']; // 24-hour format
    const selectedTime = timeInput.split('T')[1]?.substring(0, 5); // Extract time (hh:mm)

    if (!allowedTimes.includes(selectedTime)) {
        event.preventDefault(); // Stop form submission
        document.getElementById('time-error').style.display = 'block'; // Show error message
    } else {
        document.getElementById('time-error').style.display = 'none'; // Hide error message
    }
});

// Validate rating input for range 1-5
document.querySelector('.add-review').addEventListener('submit', function (event) {
    const ratingInput = document.getElementById('rating').value;

    if (ratingInput < 1 || ratingInput > 5) {
        event.preventDefault(); // Stop form submission
        document.getElementById('rating-error').style.display = 'block'; // Show error message
    } else {
        document.getElementById('rating-error').style.display = 'none'; // Hide error message
    }
});