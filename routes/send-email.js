var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    const helper = require('sendgrid').mail;
    const from_email = new helper.Email(req.body.email);
    const to_email = new helper.Email('stakashima21@gmail.com');
    const subject = req.body.subject;
    const content = new helper.Content('text/plain', req.body.message);
    const mail = new helper.Mail(from_email, subject, to_email, content);

    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);

        if (error) {
            console.log(error);
        }
        return res.json({
            'status': 'ok',
        });
    })
});

module.exports = router;
