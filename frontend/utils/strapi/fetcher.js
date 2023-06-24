import axios from 'axios'

export default async function fetcher(path = '') {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL

  return await axios.get(`${API_URL}${path}`)
    .then(response => {
      console.log('success')
      return response
    })
    .catch(error => {
      console.log('error', error)
      return null
    })
}