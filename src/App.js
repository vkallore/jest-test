import React from 'react'
import request from 'services'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    request
      .get('/users', {})
      .then(json => {
        const userData = json.data
        this.setState({ users: userData, loading: false })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    const { users, loading } = this.state
    const gitHubUsers = users.map(user => {
      return (
        <li key={user.id}>
          {user.login} ({user.id})
        </li>
      )
    })
    return (
      <div>
        <h1>Github Users</h1>
        {users.length === 0 && loading !== true ? (
          <div>No Users Found</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <ol>{gitHubUsers}</ol>
        )}
      </div>
    )
  }
}

export default App
