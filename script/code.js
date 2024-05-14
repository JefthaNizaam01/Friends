document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const friend = {
        firstName: firstName,
        lastName: lastName
    };
    console.log(friend);
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
});







