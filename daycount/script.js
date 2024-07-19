document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diff = today - startOfYear + ((startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const daysInMonth = [31, today.getFullYear() % 4 === 0 && (today.getFullYear() % 100 !== 0 || today.getFullYear() % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayCounter = 0;

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');
        monthDiv.textContent = monthNames[month];
        gridContainer.appendChild(monthDiv);

        const grid = document.createElement('div');
        grid.classList.add('grid');

        for (let day = 0; day < daysInMonth[month]; day++) {
            const square = document.createElement('div');
            square.classList.add('square');

            const dayNumber = document.createElement('div');
            dayNumber.classList.add('day-number');
            dayNumber.textContent = day + 1;

            if (dayCounter < dayOfYear) {
                square.classList.add('active');
            } else if (dayCounter === dayOfYear) {
                square.classList.add('today');
            }

            square.appendChild(dayNumber);
            grid.appendChild(square);
            dayCounter++;
        }
        
        gridContainer.appendChild(grid);
    }

    function updateSquares() {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const diff = now - startOfYear + ((startOfYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        document.querySelector('.square.today').classList.remove('today');
        document.querySelectorAll('.square').forEach((square, index) => {
            if (index < dayOfYear) {
                square.classList.add('active');
                square.classList.remove('today');
            } else if (index === dayOfYear) {
                square.classList.add('today');
                square.classList.remove('active');
            } else {
                square.classList.remove('active');
                square.classList.remove('today');
            }
        });
    }

    function checkMidnight() {
        const now = new Date();
        if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            updateSquares();
        }
    }

    updateSquares(); // Initial check
    setInterval(checkMidnight, 1000); // Check every second if it's midnight
});
