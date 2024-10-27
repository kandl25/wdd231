document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('join-class-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const danceClass = document.getElementById('class').value;

        if (name && email && danceClass) {
            confirmationMessage.style.display = 'block';
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-body');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const parentFirstName = form.elements['first'].value;
        const parentLastName = form.elements['last'].value;
        const studentFirstName = form.elements['student-first'].value;
        const studentLastName = form.elements['student-last'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const age = form.elements['age'].value;
        const birthday = form.elements['birthday'].value;
        const danceClass = form.elements['class'].value;

        const params = new URLSearchParams();
        params.append('first', parentFirstName);
        params.append('last', parentLastName);
        params.append('student-first', studentFirstName);
        params.append('student-last', studentLastName);
        params.append('email', email);
        params.append('phone', phone);
        params.append('age', age);
        params.append('birthday', birthday);
        params.append('class', danceClass);

        window.location.href = `thankyou.html?${params.toString()}`;
    });
});
/* thank you form */
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const details = `
            <strong>Parent:</strong> ${params.get('first')} ${params.get('last')}<br>
            <strong>Student:</strong> ${params.get('student-first')} ${params.get('student-last')}<br>
            <strong>Email:</strong> ${params.get('email')}<br>
            <strong>Phone:</strong> ${params.get('phone')}<br>
            <strong>Age:</strong> ${params.get('age')}<br>
            <strong>Birthday:</strong> ${params.get('birthday')}<br>
            <strong>Class:</strong> ${params.get('class')}
        `;
    document.getElementById('details').innerHTML = details;
});
