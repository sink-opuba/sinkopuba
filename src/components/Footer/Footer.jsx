import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <h3 id="contact">Stay in Touch!</h3>
      <div className="sink-details">
        <ul className="sink-details__list">
          <li title="twitter">
            <a href="https://twitter.com/sinkopuba">TW</a>
          </li>
          <li title="linkedin">
            <a href="https://www.linkedin.com/in/sinkopere-opuba">LN</a>
          </li>
          <li title="RSS Feed">
            <a href="/#RSS">RS</a>
          </li>
          <li title="Email">
            <a href="mailto:osinkopere@yahoo.com">EM</a>
          </li>
        </ul>
      </div>
      <div className="copyright-box">
        <p>
          {" "}
          © {new Date().getFullYear()}, Built with 🤎 by
          {` `}
          Sink-Opuba
        </p>
      </div>
    </footer>
  )
}

export default Footer
