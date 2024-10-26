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
