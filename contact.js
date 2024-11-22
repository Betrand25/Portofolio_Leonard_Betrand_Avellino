function SendMail() {
    var params = {
        first_name: document.getElementById("firstName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    
    emailjs.send("service_fx9kght", "template_ezx6lpi", params)
        .then(function(res) {
            alert("Success! Status: " + res.status);
        })
        .catch(function(error) {
            alert("Failed to send message. Error: " + JSON.stringify(error));
        });
}
