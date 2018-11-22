import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import font from '../data/font'
import color from '../data/color'

import Layout from '../components/layout'
import SocialMedia from '../components/socialMedia'
import ColorSwitcher from '../components/colorSwitcher'

class IndexPage extends Component {
  constructor() {
    super()

    this.state = {
      activeColor: color.primary,
    }
  }

  handleColorClick = color => {
    this.setState({
      activeColor: color,
    })
  }

  render() {
    const { classes } = this.props
    const indexStyle = {
      color: this.state.activeColor,
    }
    const infoText = text => <div className={`${classes.text}`}>{text}</div>
    const msg1 =
      "I'm a frontend software engineer who loves coffee, cooking, loud music, learning, & Javascript."
    const msg2 =
      "Let's connect! I would love to hear from you. You're awesome, BTW."
    return (
      <Layout>
        <ColorSwitcher
          onColorClick={this.handleColorClick}
          activeColor={this.state.activeColor}
        />
        <div style={indexStyle}>
          <h1 className={`${classes.title}`}>
            <FontAwesomeIcon icon={faCode} />
            <br />
            Lee
            <br />
            Richardson
          </h1>
          {infoText(msg1)}
          {infoText(msg2)}
          <SocialMedia activeColor={this.state.activeColor} />
        </div>
      </Layout>
    )
  }
}

const styles = {
  title: {
    fontWeight: font.bold,
    fontSize: '3em',
  },
  text: {
    fontWeight: font.regular,
    margin: {
      bottom: '15px',
    },
  },
}

IndexPage.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(IndexPage)
