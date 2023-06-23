const admin = require('firebase-admin')
const serviceAccount = require('../../../secrets/junpei-oue-portfolio-firebase-admin_sdk.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
})

module.exports = {
    // コントローラーのコード
}