// document.getElementById('data-form').addEventListener('submit', function (e) {
//     e.preventDefault();  // Prevent form from submitting normally

//     const name = document.getElementById('userName').value;
//     const user_id = document.getElementById('password').value;

//     // Send a POST request
//     fetch('https://localhost:5001/api/mysql', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: name, user_ID: user_id })
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.message);  // Handle the success response
//         alert('Data inserted successfully!');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });


