import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { SOCIAL_MEDIA_ACCOUNTS } from '../data/socialMedia'
import color from '../data/color'
import breakpoints from '../data/breakpoints'

class SocialMedia extends Component {
  handleSocialClick = account => window.open(account.url, '_blank')

  getIcons = () => {
    const icons = SOCIAL_MEDIA_ACCOUNTS.map(account => (
      <div
        className={`${this.props.classes.iconWrapper}`}
        onClick={() => this.handleSocialClick(account)}
        key={`social-${account.name}`}
      >
        <FontAwesomeIcon icon={account.icon} />
      </div>
    ))

    icons.push(
      <a
        className={`${this.props.classes.iconWrapper}`}
        href={'mailto:lee@leerichardson.net?subject=Hello%20Lee'}
        key={`social-email`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    )

    return icons
  }

  render() {
    const { classes } = this.props
    return <div className={`${classes.socialWrapper}`}>{this.getIcons()}</div>
  }
}

const styles = {
  socialWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '3em',
    width: '70%',
    margin: [50, 'auto'],
  },
  iconWrapper: {
    cursor: 'pointer',
    color: color.primary,
  },
  [breakpoints.small]: {
    socialWrapper: {
      width: '100%',
    },
  },
}

SocialMedia.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(SocialMedia)
