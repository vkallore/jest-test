import React from 'react'
import { getUsers } from 'requests'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const userData = await getUsers()
    this.setState({ users: userData, loading: false })
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
