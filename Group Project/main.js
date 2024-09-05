document.addEventListener('DOMContentLoaded', (event) =>{
    document.getElementById('contactMenu').style.display = 'none';
    
    });
    
    const contactUs = document.getElementById('contact');
    contactUs.addEventListener('click', ()=>{
        document.getElementById('menu').style.display = 'none';
        document.getElementById('container-aboutUs').style.display= 'none';
        document.getElementById('aboutUs').style.display = 'none';
        document.getElementById('cateringOptions').style.display = 'none';
        document.getElementById('catering').style.display= 'none';
        document.getElementById('contactMenu').style.display = 'flex';
        
    });

    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', ()=>{
        document.getElementById('contactMenu').style.display = 'none';
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('aboutUs').style.display = 'flex';
        document.getElementById('cateringOptions').style.display = 'flex';

        document.getElementById('container-aboutUs').style.display= 'flex';
        document.getElementById('catering').style.display= 'flex';

    });