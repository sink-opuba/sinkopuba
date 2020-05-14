import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import DrawToggleButton from "../DrawToggleButton/DrawToggleButton"
import SideBar from "../SideBar/SideBar.jsx"

const Header = ({ siteTitle, path }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">Sink Opuba</Link>
        </div>

        <div className="nav-toggle">
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} handleClick={toggleSideBarClick} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
