import { target } from './consts'
import axios from 'axios'

export default async function fetcher(path = '') {
  return await axios.get(`${target}${path}`)
    .then(response => {
      console.log('success')
      return response
    })
    .catch(error => {
      console.log('error', error)
      return null
    })
}