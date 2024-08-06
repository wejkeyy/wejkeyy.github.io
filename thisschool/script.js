function updateHolidayPercentage() {
    var now = new Date();
    var startOfHolidays = new Date(2024, 5, 29, 0, 0, 0); 
    var endOfHolidays = new Date(2024, 8, 2, 0, 0, 0); 
    
    if (now < startOfHolidays) {
        document.getElementById('percentage').innerHTML = `<p>0% of the holidays have passed.</p>`;
        document.getElementById('progressBar').style.width = '0%';
        return;
    }
    
    if (now >= endOfHolidays) {
        document.getElementById('percentage').innerHTML = `<p>100% of the holidays have passed.</p>`;
        document.getElementById('progressBar').style.width = '100%';
        return;
    }
    
    var totalHolidayTime = endOfHolidays - startOfHolidays; 
    var passedHolidayTime = now - startOfHolidays; 
    
    var percentage = (passedHolidayTime / totalHolidayTime) * 100;
    percentage = Math.min(Math.max(percentage, 0), 100); 
    
    percentage = percentage.toFixed(2); 
    
    document.getElementById('percentage').innerHTML = `<p>${percentage}% of the holidays have passed.</p>`;
    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
}

updateHolidayPercentage();
setInterval(updateHolidayPercentage, 1000);
