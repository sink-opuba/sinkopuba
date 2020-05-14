import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
// import "./styles/bootstrap/bootstrap.min.css"
import "./styles/_main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <div onClick={() => setSideBarOpen(false)}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
