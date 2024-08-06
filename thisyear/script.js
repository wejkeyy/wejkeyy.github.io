function updatePercentage() {
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

  var millisecondsInYear = endOfYear - startOfYear;
  var difference = now - startOfYear;

  var percentage = (difference / millisecondsInYear) * 100;
  percentage = Math.min(Math.max(percentage, 0), 100);
  percentage = percentage.toFixed(2);

  var oneDay = 1000 * 60 * 60 * 24;
  var dayOfYear = Math.floor(difference / oneDay) + 1;

  document.getElementById('percentage').innerHTML = `<p>${percentage}% of the year has passed. (${dayOfYear}/365)</p>`;
  var progressBar = document.getElementById('progressBar');
  progressBar.style.width = percentage + '%';
}

updatePercentage();
setInterval(updatePercentage, 1000);
