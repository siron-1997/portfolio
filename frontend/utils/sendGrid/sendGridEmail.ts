const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY

export default async function sendGridEmail(contents: any) {
    sgMail.setApiKey(SENDGRID_API_KEY)

    const myName: string = '大上 純平'
    const myEmail: string = 'junpei.oue@gmail.com'

    /* 自動返信メッセージ */
    const msg = {
        to: [contents?.email],
        from: myEmail,
        subject: 'Junpei Oue へのお問合せメール',
        text: 'Hello',
        html: `
            <p>${contents?.name} 様</p>
            <p>お問い合せいただき、ありがとうございます。</p>
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
            <p>その際には ${myEmail} にお問い合わせいただき、直接ご確認ください。</p>
            <br/>
            <hr/>
            <p>${myName}</p>
            <p>Email: ${myEmail}</p>
        `,
    }
    /* お問合せ内容受取メッセージ */
    const myMsg = {
        to: 'junpei.oue@gmail.com',
        from: contents?.email,
        subject: 'Portfolioからのお問合せ',
        text: 'Hello',
        html: `
            <p>${contents?.name} さんから以下の内容を受信しました。</p>
            <br/>
            <p>=======================================================================================</p>
            <p>
                ${contents?.name && `お名前： ${contents.name}<br/>`}
                ${contents?.email && `メール： ${contents.email}<br/>`}
                ${contents?.message && `メッセージ： ${contents.message}<br/>`}
            </p>
            <p>=======================================================================================</p>
        `
    }

    /* 自動返信 */
    await sgMail
        .send(msg)
        .then(() => {
            console.log('auto reply Email sent')
        })
        .catch((error: any) => {
            console.error('atuo reply error occured: ', error.response.body)
        })
    /* お問合せ内容受取 */
    await sgMail
        .send(myMsg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error: any) => {
            console.error('error occured: ', error.response.body)
        })
}
