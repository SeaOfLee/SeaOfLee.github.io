import React, { Component } from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'

import Layout from '../components/layout'
import Image from '../components/image'

const styles = {
  title: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: '3em',
    color: '#0356DD',
  },
}

class IndexPage extends Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <h1 className={`${classes.title}`}>Lee Richardson</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

IndexPage.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(IndexPage)
