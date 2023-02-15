import { target } from './consts'

import axios from 'axios'

export default async function fetcher(path = '') {
  return await axios.get(`${target}/${path}`)
    .then(response => {
      console.log('成功')
      return response
    })
    .catch(error => {
      console.log('失敗')
      return null
    })
}