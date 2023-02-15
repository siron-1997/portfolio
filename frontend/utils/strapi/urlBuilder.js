import { target } from './consts'

export default function urlBuilder(url) {
    const imagePath = `${target}${url}`
    return imagePath
}