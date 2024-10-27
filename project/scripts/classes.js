document.addEventListener('DOMContentLoaded', function() {
    fetchURL('')
        .then(response => response.json())
        .then(data => {
            const scheduleContainer = document.getElementById('schedule-container');
            const schedule = data.schedule;

            schedule.forEach(daySchedule => {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day-schedule');
                dayDiv.innerHTML = `<h2>${daySchedule.day}</h2>`;

                daySchedule.classes.forEach(classItem => {
                    const classDiv = document.createElement('div');
                    classDiv.classList.add('class-item');
                    classDiv.innerHTML = `
                        <p><strong>Time:</strong> ${classItem.time}</p>
                        <p><strong>Class:</strong> ${classItem.name}</p>
                        <p><strong>Instructor:</strong> ${classItem.instructor}</p>
                    `;
                    dayDiv.appendChild(classDiv);
                });

                scheduleContainer.appendChild(dayDiv);
            });
        })
        .catch(error => console.error('Error loading schedule:', error));
});
