async function updateUser(userId, name, email) {
    const response = await fetch('http://localhost:5000/api/user/updateUser', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            name: name,
            email: email
        })
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result.message);
    } else {
        console.error('Failed to update user:', response.statusText);
    }
}