import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Fact from './fact'
import breakpoints from '../data/breakpoints'
import { FUN_FACTS } from '../data/funFacts'

class FunFacts extends Component {
  getFacts = () => FUN_FACTS.map(fact => <Fact fact={fact} />)

  render() {
    const { classes } = this.props

    return <div className={`${classes.factWrapper}`}>{this.getFacts()}</div>
  }
}

const styles = {
  factWrapper: {
    columnCount: 3,
    columnGap: 10,
    width: '80%',
    margin: [0, 'auto'],
    textAlign: 'center',

    [breakpoints.small]: {
      columnCount: 2,
    },
  },
}

FunFacts.defaultProps = {
  classes: styles,
}

export default injectSheet(styles)(FunFacts)
