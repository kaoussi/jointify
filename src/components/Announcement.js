import React from "react"
import { Link } from "react-scroll"

const Announcement = () => (
  <div className="announcement">
    <b>Jointify x COVID-19:</b> Jointify recognizes the struggles of your
    business with the current COVID-19 Pandemic. <br />
    As a nascent mentorship platform, we have decided to launch free consulting
    offered by experienced professionals all over Morocco to help you adapt your
    business to the current outbreak. If you are a business owner and your
    business fits into our{" "}
    <Link
      className="announcement__wrapper--link requirements"
      to="requirements"
      spy={true}
      smooth={true}
      duration={1000}
    >
      scope
    </Link>
    , or if you are an experienced professional and you would like to volunteer
    as a mentor, please apply{" "}
    <Link
      className="announcement__wrapper--link joinUs"
      to="joinUs"
      spy={true}
      smooth={true}
      duration={2000}
    >
      here
    </Link>
    .{" "}
  </div>
)

export default Announcement
