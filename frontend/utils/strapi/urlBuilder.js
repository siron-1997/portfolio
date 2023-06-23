import { target } from './consts'

export default function urlBuilder(url) {
    const imagePath = `${NEXT_PUBLIC_STRAPI_DOMAIN}${url}`
    return imagePath
}