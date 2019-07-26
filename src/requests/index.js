import request from 'services'

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
