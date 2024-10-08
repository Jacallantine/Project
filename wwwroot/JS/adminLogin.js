const managerSignIn = document.getElementById('managerPage')
    managerSignIn.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let username = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        

        if (username === 'admin' && password === 'admin') {
            console.log(username);
            window.open('admin.html')
        }
        
        if (username === 'group' && password === 'project') {
            console.log(username);
            window.open('manager.html')
        }
    });