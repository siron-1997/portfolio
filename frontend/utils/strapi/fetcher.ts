import axios, { AxiosResponse } from 'axios'

const fetcher = async (path: string = ''): Promise<AxiosResponse<any> | null> => {
  const API_URL: string = process.env.NEXT_PUBLIC_STRAPI_URL

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

export default fetcher