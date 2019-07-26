import { request } from 'services'

/**
 * Get user details
 * @param {string} userName
 */
export const getUser = userName => {
  return request
    .get(`/users/${userName}`)
    .then(json => {
      const userData = json.data
      return userData
    })
    .catch(e => {
      console.log(e)
    })
}

/**
 * Get users
 */
export const getUsers = () => {
  return request
    .get('/users', {})
    .then(json => {
      const userData = json.data
      return userData
    })
    .catch(e => {
      console.log(e)
    })
}
