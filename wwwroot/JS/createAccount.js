async function createUser(){
    let first_name = document.getElementById('fName').value;
    let last_name = document.getElementById('lName').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let zipcode = document.getElementById('zip').value;
    let state = document.getElementById('state').value;
    let gender = document.getElementById('gender').value;

    const response = await fetch('http://localhost:5065/api/user/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            password : password,
            email: email,
            address: address,
            zipcode: zipcode,
            state: state,
            gender: gender
        })
    });

    
    if (response.ok) {
        const jsonResponse = await response.json();
        alert(jsonResponse.message); 
    } else {
        const errorResponse = await response.json();
        console.error('Error details:', errorResponse);
        alert('Error creating user: ' + errorResponse.message);
    }

}