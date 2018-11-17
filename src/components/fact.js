import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDizzy } from '@fortawesome/free-regular-svg-icons'
import color from '../data/color'

class Fact extends Component {
  render() {
    const { classes, fact } = this.props

    return (
      <div className={`${classes.fact}`}>
        <p className={`${classes.factId}`}>Fun Fact #{fact.id}</p>
        <p className={`${classes.factText}`}>{fact.text}</p>
        <FontAwesomeIcon className={`${classes.factIcon}`} icon={faDizzy} />
      </div>
    )
  }
}

const styles = {
  fact: {
    breakInside: 'avoid',
    display: 'inline-block',
    padding: [20, 10],
    marginBottom: '10px',
    width: '100%',
    height: '250px',
    borderRadius: '8px',
    backgroundColor: `${color.lightGray}`,
    border: `1px solid ${color.primary}`,
    textAlign: 'center',
  },

  factIcon: {
    fontSize: '2em',
  },

  factText: {
    fontSize: '.8em',
  },
}

Fact.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(Fact)
