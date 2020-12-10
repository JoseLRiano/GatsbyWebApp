import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Option from "./button";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#f5f5f5",
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
            color: `#2f4f4f`,
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
