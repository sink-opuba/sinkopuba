import React from "react"
import { FaTwitter, FaLinkedinIn, FaRss } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="footer">
      <h3 id="contact">Stay in Touch!</h3>
      <div className="sink-details">
        <ul className="sink-details__list">
          <li title="twitter">
            <a href="https://twitter.com/sinkopuba">
              <FaTwitter />
            </a>
          </li>
          <li title="linkedin">
            <a href="https://www.linkedin.com/in/sinkopere-opuba">
              <FaLinkedinIn />
            </a>
          </li>
          <li title="RSS Feed">
            <a href="/#RSS">
              <FaRss />
            </a>
          </li>
          <li title="Email">
            <a href="mailto:osinkopere@yahoo.com">
              <MdEmail />
            </a>
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
