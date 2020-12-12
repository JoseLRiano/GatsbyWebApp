import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Option from "./button";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgb(147, 37, 57)",
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        {/* <Option /> */}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
