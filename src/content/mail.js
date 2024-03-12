import { nodemailer } from "nodemailer";

var yourMessage = document.getElementById("message").value;
var yourEmail = document.getElementById("sendermail").value;
var yourName = document.getElementById("yourname").value;
var subject = document.getElementById("subject").value;
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "assouakakpo69@gmail.com",
        pass: "zlgxjvcwixtulqfy",
    },
});

var mailOptions = {
    from: "assouakakpo69@gmail.com",
    to: "developpeurmathmathieu@gmail.com",
    subject: subject,
    text: `Message envoyé par ${yourName} adresse: ${yourEmail}   ` + yourMessage,
};

const sendmail = () => {
    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            alert("Maid sent successfully")
        }
    });
}

export default sendmail;

