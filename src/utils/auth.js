import auth0 from 'auth0-js'
import swal from 'sweetalert2'

import { navigateTo } from 'gatsby-link'

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID

const isBrowser = typeof window !== 'undefined'

export default class Auth {
  auth0 = isBrowser
    ? new auth0.WebAuth({
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
    : {}

  login() {
    if (!isBrowser) {
      return
    }
    this.auth0.authorize()
  }

  logout = () => {
    if (isBrowser) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id_token')
      localStorage.removeItem('expires_at')
    }
  }

  handleAuthentication = () => {
    if (!isBrowser) {
      return
    }

    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        navigateTo('/')
      } else if (err) {
        console.log(err)
        swal({
          title: 'Oh! :( Sorry we could not log you in!',
          text: 'Totally our fault, please try later',
          type: 'error',
          confirmButtonText: 'Sure!',
        })
        navigateTo('/')
      }
    })
  }

  isAuthenticated = () => {
    if (!isBrowser) {
      // For SSR, we’re never authenticated.
      return false
    }

    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  setSession(authResult) {
    if (!isBrowser) {
      return
    }

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
