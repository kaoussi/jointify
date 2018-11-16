import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={this.handleChange} required />
          </label>
        </p>
        <p>
          <button
            type="submit"
            className="button button-secondary button-shadow"
          >
            Send
          </button>
        </p>
      </form>
    )
  }
}

export default ContactForm