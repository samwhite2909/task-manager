const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'samuel.white@msdigital.com',
        subject: 'Thanks for joining!',
        text: `Welcome ${name}! Let me know how you get along with the app!`
    })
}

const sendLeavingEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'samuel.white@msdigital.com',
        subject: 'Sorry to see you go',
        text: `Bye ${name}, we're sorry you're leaving but if you want to come back, please make a new account.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendLeavingEmail
}
