import React, { Component } from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'

import Layout from '../components/layout'
import Image from '../components/image'

const styles = {
  title: {
    fontWeight: '800',
    fontSize: '4em',
  },
  text: {
    fontWeight: '400',
    margin: {
      bottom: '15px',
    },
  },
}

class IndexPage extends Component {
  render() {
    const infoText = text => <div className={`${classes.text}`}>{text}</div>
    const { classes } = this.props
    const msg1 =
      "I'm a frontend software engineer who loves coffee, cooking, loud music, learning, & Javascript."
    const msg2 =
      "Let's connect! I would love to hear from you. You're awesome, BTW."
    return (
      <Layout>
        <h1 className={`${classes.title}`}>
          Lee
          <br />
          Richardson
        </h1>
        {infoText(msg1)}
        {infoText(msg2)}
        {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div> */}
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

IndexPage.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(IndexPage)
