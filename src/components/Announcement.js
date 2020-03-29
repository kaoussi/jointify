import React from "react"
import { Link } from "react-scroll"

const Announcement = () => (
  <div className="announcement announcement__open">
    <div className="announcement__wrapper">
      <h2 className="announcement__title">Jointify x COVID-19</h2>
      <p>
        Jointify recognizes the struggles of your business with the current
        COVID-19 Pandemic. <br />
        As a nascent mentorship platform, we have decided to launch free
        consulting offered by experts all over Morocco to help you adapt your
        business to the current outbreak.
        <br />
        If your business meets our{" "}
        <Link
          className="announcement__wrapper--link requirements"
          to="requirements"
          spy={true}
          smooth={true}
          duration={500}
        >
          requirements
        </Link>
        , please fill{" "}
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://form.jotform.com/200875941747566"
          className="announcement__wrapper--link"
        >
          this short form
        </a>
        .{" "}
      </p>
    </div>
  </div>
)

export default Announcement
