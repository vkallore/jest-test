import axios from 'axios'

const baseURL = `${process.env.REACT_APP_API_URL}`
console.log(baseURL)
export default axios.create({
  baseURL
})
