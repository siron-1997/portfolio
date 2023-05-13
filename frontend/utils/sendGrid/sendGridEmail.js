const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendGridEmail(contents) {
    sgMail.setApiKey(SENDGRID_API_KEY)

    const myEmail = 'junpei.oue@gmail.com',
          mySubEmail = 'sironvssiron@gmail.com'

    const msg = {
        // to: 'test@example.com', // Change to your recipient
        to: [contents?.email.toString()],
        bcc: [myEmail, mySubEmail],
        from: myEmail, // Change to your verified sender
        subject: 'Junpei Oue への問合せメール',
        text: 'Hello Siron',
        html: `
            <p>${contents?.name} 様</p>
            <p>お問い合わせいただき、ありがとうございます。</p>
            <P>下記の内容を受け付けましたので、折り返しご連絡差し上げるまでしばらくお待ちください。</P>
            <p>年末年始および土日祝を除き、1～2日以内にご返信しています。</p>
            <br/>
            <p>
                ${contents?.name && `お名前： ${contents.name}<br/>`}
                ${contents?.email && `メール： ${contents.email}<br/>`}
                ${contents?.message && `お名前： ${contents.message}<br/>`}
            </p>
            <br/>
            <p>サーバートラブルなどにより、メールが正常に送付されないことがあります。</p>
            <p>その際には junpei.oue@gmail.com にお問い合わせいただき、直接ご確認ください。</p>
            <br/>
            <hr/>
            <p>大上 純平</p>
        `,
    }

    await sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch(error => {
            console.error('error occured: ', error.response.body)
        })
}
