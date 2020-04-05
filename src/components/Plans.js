import React from "react"

const Plans = () => (
  <section className="plans section">
    <div className="container">
      <div className="plans-inner section-inner has-top-divider">
        <h2 className="section-title mt-0 text-center">JOIN US</h2>
        <div className="plans-tables-wrap">
          <div className="plans-table is-revealing">
            <div className="plans-table-inner">
              <div className="plans-table-main">
                <div className="plans-table-header">
                  <div className="plans-table-title mt-12 mb-16 text-secondary text-center">
                    Company
                  </div>
                  <div className="plans-table-price mb-24 pb-32">{""}</div>
                </div>
                <ul className="plans-table-features list-reset text-xs mb-56">
                  <li>
                    <span className="list-icon">
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                          fill="#00A2B8"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </span>
                    <span>Based in Morocco.</span>
                  </li>
                  <li>
                    <span className="list-icon">
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                          fill="#00A2B8"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </span>
                    <span>Does Not exceed MAD 10M yearly in turnover.</span>
                  </li>
                  <li>
                    <span className="list-icon">
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
                          fill="#00A2B8"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </span>
                    <span>Directly or Indirectly impacted by COVID19.</span>
                  </li>
                </ul>
              </div>
              <div className="plans-table-cta">
                <a
                  className="button button-secondary button-block"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://form.jotform.com/200875941747566"
                >
                  Join us!
                </a>
              </div>
            </div>
          </div>
          <div className="plans-table is-revealing">
            <div className="plans-table-inner">
              <div className="plans-table-main">
                <div className="plans-table-header">
                  <div className="plans-table-title mt-12 mb-16 text-primary text-center">
                    Mentor
                  </div>
                  <div className="plans-table-price mb-24 pb-32">{""}</div>
                </div>
                <ul className="plans-table-features list-reset text-xs mb-56">
                  <li>
                    <span>
                      We welcome all professionals with relevant experience, in
                      any field related to small businesses, Including
                      (Technology, Finance, Management, Marketing, Human
                      ressources, Security etc..)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="plans-table-cta">
                <a
                  className="button button-primary button-block"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://form.jotform.com/200945026411546"
                >
                  Join us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Plans
