import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Swal from "sweetalert2"
import { ClipLoader } from "react-spinners"
import styled from "styled-components"

const Clip = styled(ClipLoader)`
  display: block;
  margin: 0 auto;
  border-color: red;
  @include media("<medium") {
    text-align: center;
  }
`

class CtaSection extends React.Component {
  state = {
    email: "",
    mailChimpResult: null,
    loading: false,
  }

  _handleSubmit = async event => {
    event.preventDefault()

    const { email } = this.state
    this.setState({ loading: true })

    const result = await addToMailchimp(email)

    this.setState({ mailChimpResult: result, email: "" })
    console.log(result)
    Swal.fire({
      icon: result.result,
      title: result.result,
      footer: result.msg,
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
                Be the First to learn about our offers.
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
                      sizeUnit={"px"}
                      size={150}
                      color={"#123abc"}
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
