<<<<<<< HEAD
document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let activity = document.getElementById('activity').value;

    // Example: Perform validation before submitting
    if (activity) {
        // Simulate API request to record activity
        alert(`Activity "${activity}" recorded successfully!`);
        this.reset();
    } else {
        alert('Please enter an activity.');
    }
});
=======
document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let activity = document.getElementById('activity').value;

    // Example: Perform validation before submitting
    if (activity) {
        // Simulate API request to record activity
        alert(`Activity "${activity}" recorded successfully!`);
        this.reset();
    } else {
        alert('Please enter an activity.');
    }
});
>>>>>>> 2f6855896c175a8eeba9cba1d6a0c4185c3fda30
