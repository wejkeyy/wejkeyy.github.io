function updatePercentage() {
    var now = new Date();
    var startOfYear = new Date(now.getFullYear(), 0, 1);
    var difference = now - startOfYear;
    var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    var percentage = (difference / millisecondsInYear) * 100;
    percentage = percentage.toFixed(2);
  
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(difference / oneDay) + 1;
  
    document.getElementById('percentage').innerHTML = `<p>${percentage}% of the year has passed. (${dayOfYear}/365)</p>`;
    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
  }
  
  updatePercentage();
  
  setInterval(updatePercentage, 1000);  
