const calendarDates = document.getElementById("calendarDates");
const monthYear = document.getElementById("monthYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const slotContainer = document.getElementById("slotContainer");
const reserveBtn = document.getElementById("reserveBtn");
const timeSlotsDiv = document.getElementById("timeSlots");

let currentDate = new Date();
let selectedDate = null;
let selectedSlot = null;

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Set the header to display the current month and year
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    // Clear any previous days
    calendarDates.innerHTML = "";
    
    // Get the first day of the month and the number of days in the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Render blank slots for days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const blankDiv = document.createElement("div");
        calendarDates.appendChild(blankDiv);
    }

    // Render days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.addEventListener('click', () => selectDate(year, month, day));
        calendarDates.appendChild(dayDiv);
    }
}

function selectDate(year, month, day) {
    selectedDate = new Date(year, month, day);
    alert(`Selected date: ${selectedDate.toDateString()}`);
    loadAvailableSlots(selectedDate);
}

function loadAvailableSlots(date) {
    // Fetch available slots for the selected date from backend
    fetch(`http://localhost:5065/api/reservations/available?date=${date.toISOString().split('T')[0]}`)
    .then(response => response.json())
    .then(data => {
        slotContainer.innerHTML = "";
        const hours = Array.from({ length: 10 }, (_, i) => `${8 + i}:00`);
        
        hours.forEach(hour => {
            const slotDiv = document.createElement("div");
            slotDiv.textContent = hour;
            slotDiv.classList.add(data.includes(hour) ? "booked" : "");
            if (!slotDiv.classList.contains("booked")) {
                slotDiv.addEventListener('click', () => selectSlot(hour));
            }
            slotContainer.appendChild(slotDiv);
        });

        timeSlotsDiv.style.display = "block"; // Show available slots
    });
}

function selectSlot(hour) {
    selectedSlot = hour;
    alert(`Selected time: ${hour}`);
}

// Reserve the selected time slot
reserveBtn.addEventListener("click", () => {
    if (!selectedDate || !selectedSlot) {
        alert("Please select a date and time slot first.");
        return;
    }
    
    const reservation = {
        date: selectedDate.toISOString().split('T')[0],
        time: selectedSlot,
        user_id: 1 // In a real app, you would get the user ID from logged-in user info
    };

    fetch('http://localhost:5065/api/reservations/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadAvailableSlots(selectedDate); // Reload the available slots
    });
});

// Initialize the calendar
renderCalendar(currentDate);

// Handle previous and next month buttons
prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});
