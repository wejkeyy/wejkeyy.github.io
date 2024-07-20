function updateHolidayPercentage() {
    var now = new Date();
    var startOfHolidays = new Date(2024, 5, 29, 0, 0, 0); 
    var endOfHolidays = new Date(2024, 8, 2, 0, 0, 0); 
    var totalHolidayTime = endOfHolidays - startOfHolidays;
    var passedHolidayTime = now - startOfHolidays;
    
    var percentage = (passedHolidayTime / totalHolidayTime) * 100;
    if (percentage > 100) {
        percentage = 100; 
    }
    percentage = percentage.toFixed(2);
    
    document.getElementById('percentage').innerHTML = `<p>${percentage}% of the holidays have passed.</p>`;
    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
}

updateHolidayPercentage();
setInterval(updateHolidayPercentage, 1000);
