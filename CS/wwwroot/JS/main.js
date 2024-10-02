document.addEventListener('DOMContentLoaded', (event) =>{
    
    });


    
    






    function contactHTML(){
        window.open("contact.html", '_self')
    }

    function homeHTML(){
        window.open('index.html', '_self')
    }

    function reservationHTML(){
        window.open('reservation.html', '_blank')
    }

    function adminLoginHTML(){
        window.open('adminLogin.html', '_self')
    }

    function signInHTML(){
        window.open('signIn.html', '_blank')
    }
    


    function hideMenu()
    {
        document.getElementById('menu').style.display = 'none';
        // document.getElementById('container-aboutUs').style.display= 'none';
        // document.getElementById('aboutUs').style.display = 'none';
        // document.getElementById('cateringOptions').style.display = 'none';
        // document.getElementById('catering').style.display= 'none';

    }

    function displayMenu()
    {
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('aboutUs').style.display = 'flex';
        document.getElementById('cateringOptions').style.display = 'flex';
        document.getElementById('container-aboutUs').style.display= 'flex';
        document.getElementById('catering').style.display= 'flex';

    }