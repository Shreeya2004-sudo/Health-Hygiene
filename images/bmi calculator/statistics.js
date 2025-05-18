<<<<<<< HEAD
// Example: Fetch and display statistics from backend
document.addEventListener('DOMContentLoaded', function() {
    fetchStatistics(); // Implement fetchStatistics function to fetch data
});

function fetchStatistics() {
    // Example: Fetch statistics from API endpoint
    // Replace with actual API call or data manipulation
    let statisticsData = {
        handwashing: 25,
        teethBrushing: 30,
        shower: 15
    };

    let statisticsDiv = document.getElementById('statistics');
    statisticsDiv.innerHTML = `<p>Handwashing: ${statisticsData.handwashing} times</p>
                               <p>Teeth Brushing: ${statisticsData.teethBrushing} times</p>
                               <p>Shower: ${statisticsData.shower} times</p>`;
}
=======
// Example: Fetch and display statistics from backend
document.addEventListener('DOMContentLoaded', function() {
    fetchStatistics(); // Implement fetchStatistics function to fetch data
});

function fetchStatistics() {
    // Example: Fetch statistics from API endpoint
    // Replace with actual API call or data manipulation
    let statisticsData = {
        handwashing: 25,
        teethBrushing: 30,
        shower: 15
    };

    let statisticsDiv = document.getElementById('statistics');
    statisticsDiv.innerHTML = `<p>Handwashing: ${statisticsData.handwashing} times</p>
                               <p>Teeth Brushing: ${statisticsData.teethBrushing} times</p>
                               <p>Shower: ${statisticsData.shower} times</p>`;
}
>>>>>>> 2f6855896c175a8eeba9cba1d6a0c4185c3fda30
