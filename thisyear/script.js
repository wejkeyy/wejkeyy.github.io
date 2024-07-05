var now = new Date();
var startOfYear = new Date(now.getFullYear(), 0, 1);
var difference = now - startOfYear;
var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years
var percentage = (difference / millisecondsInYear) * 100;

percentage = percentage.toFixed(2);
document.getElementById('percentage').innerHTML = `<p>${percentage}% of the year has passed.</p>`;

var progressBar = document.getElementById('progressBar');
progressBar.style.width = percentage + '%';
