const clientEmail = 'jaredcallantine1@gmail.com'


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
