import auth0 from 'auth0-js'
import swal from 'sweetalert2'

import { navigateTo } from 'gatsby-link'

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000/callback'
        : 'https://jointify.artisoft.ma/callback',
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user')
  }

  handleAuthentication() {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          navigateTo('/')
        } else if (err) {
          navigateTo('/')
          console.log(err)
          swal({
            title: 'Oh! :( Sorry we could not log you in!',
            text: 'Totally our fault, please try later',
            type: 'error',
            confirmButtonText: 'Sure!',
          })
        }
      })
    }
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)

    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'))
    }
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name
    }
  }
}
