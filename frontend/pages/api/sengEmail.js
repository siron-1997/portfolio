import { sendGridEmail } from '@/utils/sendGrid'

export default async function sendEmail(req, res) {
    console.log(req)
    if (req.method === 'POST') {
        const contents = req.body
        await sendGridEmail(contents)
        
        return res.status(200).end()
    }
    
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    })
}