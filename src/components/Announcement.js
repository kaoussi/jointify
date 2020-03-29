import React from "react"

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
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://form.jotform.com/200875941747566"
          className="announcement__wrapper--link"
        >
          Fill the form
        </a>
        .{" "}
      </p>
    </div>
  </div>
)

export default Announcement
