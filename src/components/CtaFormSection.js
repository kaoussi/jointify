import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import swal from 'sweetalert2'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'

const Clip = styled(ClipLoader)`
  display: block;
  margin: 0 auto;
  border-color: red;
  @include media('<medium') {
    text-align: center;
  }
`

class CtaSection extends React.Component {
  state = {
    email: '',
    mailChimpResult: null,
    loading: false,
  }

  _handleSubmit = async event => {
    event.preventDefault()

    const { email } = this.state
    const listFields = { email }
    this.setState({ loading: true })

    const result = await addToMailchimp(email, listFields)
    // I recommend setting `result` to React state
    // but you can do whatever you want

    this.setState({ mailChimpResult: result, email: '' })
    console.log(result)
    swal({
      title: result.result,
      html: result.msg,
      icon: 'success',
      button: 'OK.!',
    })
    this.setState({ loading: false })
  }

  render() {
    const { email, loading } = this.state
    return (
      <section className="newsletter section text-light">
        <div className="container-sm">
          <div className="newsletter-inner section-inner">
            <div className="newsletter-header text-center">
              <h2 className="section-title mt-0">Stay in the know</h2>
              <p className="section-paragraph">
                Be The first to learn about our offers.
              </p>
            </div>
            <form onSubmit={this._handleSubmit}>
              <div className="footer-form newsletter-form field field-grouped">
                <div className="control control-expanded">
                  <label htmlFor="mailchim-email" hidden />
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="mailchimp-email"
                    placeholder="Your best email&hellip;"
                    value={email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>
                <div className="control">
                  {loading ? (
                    <Clip
                      sizeUnit={'px'}
                      size={150}
                      color={'#123abc'}
                      loading={loading}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="button button-primary button-block button-shadow"
                      disabled={loading}
                    >
                      Early access
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default CtaSection
