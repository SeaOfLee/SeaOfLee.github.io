import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { StaticQuery, graphql } from 'gatsby'
import color from '../data/color'
import font from '../data/font'

import './layout.css'

const Layout = ({ classes, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={`${classes.app}`}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Personal site for Lee Richardson.',
            },
            {
              name: 'keywords',
              content: 'personal, developer, frontend, javascript',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

const styles = {
  app: {
    fontFamily: font.default,
    fontWeight: font.regular,
    color: color.primary,
    padding: [90, 30],
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectSheet(styles)(Layout)
