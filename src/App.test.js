import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { getUser, getUsers } from './requests'

beforeEach(() => {
  jest.resetModules()
})

describe('Render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('getUser', () => {
  it('should get user', () => {
    return getUser('vkallore').then(user => {
      const expected = 'vkallore'
      expect(user).toBeDefined()
      expect(user.login).toEqual(expected)
    })
  })
})

describe('getUserMock', () => {
  it('should get user mock', () => {
    jest.doMock(
      './requests',
      getUser().then(user => {
        const expected = 'mojombo'
        expect(user).toBeDefined()
        expect(user.login).toEqual(expected)
      })
    )
  })
})
