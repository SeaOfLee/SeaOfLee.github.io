import React, { Component } from 'react'
import injectSheet from 'react-jss'
import color from '../data/color'

class Fact extends Component {
  render() {
    const { classes, fact } = this.props

    return (
      <div className={`${classes.fact}`}>
        <p className={`${classes.factId}`}>Fun Fact #{fact.id}</p>
        <p className={`${classes.factText}`}>{fact.text}</p>
      </div>
    )
  }
}

const styles = {
  fact: {
    display: 'flex',
    padding: [20, 10],
    // height: '200px',
    width: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#FAFAFA',
    border: `1px solid ${color.primary}`,
    textAlign: 'center',
  },

  factText: {
    fontSize: '.8em',
  },
}

Fact.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(Fact)
