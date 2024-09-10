const clientEmail = 'jaredcallantine1@gmail.com'


document.addEventListener('DOMContentLoaded', (event) =>{
    document.getElementById('contactMenu').style.display = 'none';
    
    });
    
    const contactUs = document.getElementById('contact');
    contactUs.addEventListener('click', ()=>{
        document.getElementById('contactMenu').style.display = 'flex';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('container-aboutUs').style.display= 'none';
        document.getElementById('aboutUs').style.display = 'none';
        document.getElementById('cateringOptions').style.display = 'none';
        document.getElementById('catering').style.display= 'none';
        
        
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


    const sendButtonToEmail = document.getElementById('send')
    sendButtonToEmail.addEventListener('click', (e)=>{
        e.preventDefault();
        let senderEmail = document.getElementById('email').value
        let senderfName = document.getElementById('fName').value
        let senderlName = document.getElementById('lName').value
        let phoneNumber = document.getElementById('pNumber').value
        let descriptionEmail = document.getElementById('description').value
        let emailBody = `
        <b>Sender's Email: </b>${senderEmail}
        <br>
        <b>Full Name: </b> ${senderfName} ${senderlName}
        <br>
        <b>Phone Number: </b> ${phoneNumber}
        <br>
        <b>Message Description:</b>
        <br>
        ${descriptionEmail}
        <br>`
        

        Email.send({
            SecureToken : "11e53d79-7561-4894-9682-78b6627778eb",
            To : `${clientEmail}`,
            From : `${clientEmail}`,
            Subject : "CATERING SUPPORT",
            Body : `${emailBody}`
        }).then(
          message => alert(message)
        );

    })




