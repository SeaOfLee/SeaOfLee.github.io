import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SOCIAL_MEDIA_ACCOUNTS } from '../data/constants'

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
  },
}

class SocialMedia extends Component {
  handleSocialClick = account => window.open(account.url, '_blank')

  getIcons = () =>
    SOCIAL_MEDIA_ACCOUNTS.map(account => (
      <div
        className={`${this.props.classes.iconWrapper}`}
        onClick={() => this.handleSocialClick(account)}
        key={`social-${account.name}`}
      >
        <FontAwesomeIcon icon={account.icon} />
      </div>
    ))

  render() {
    const { classes } = this.props
    return <div className={`${classes.socialWrapper}`}>{this.getIcons()}</div>
  }
}

SocialMedia.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(SocialMedia)
