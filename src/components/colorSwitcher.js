import React, { Component } from 'react'
import injectSheet from 'react-jss'
import color from '../data/color'

class ColorSwitcher extends Component {
  render() {
    const { classes } = this.props
    const THEME_COLORS = [
      color.primary,
      color.purple,
      color.redSox,
      color.green,
    ]

    return (
      <div className={`${classes.colorWrapper}`}>
        {THEME_COLORS.map(color => (
          <div
            className={`${classes.colorTile}`}
            style={{ backgroundColor: color }}
            onClick={() => this.props.onColorClick(color)}
            key={color}
          />
        ))}
      </div>
    )
  }
}

const styles = {
  colorWrapper: {
    height: '30px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    textAlign: 'center',
  },

  colorTile: {
    display: 'inline-block',
    height: '30px',
    width: '30px',
    borderRadius: '4px',
    marginRight: '4px',
    cursor: 'pointer',
  },
}

ColorSwitcher.defaultProps = {
  classes: styles,
  onColorClick: () => {},
}

export default injectSheet(styles)(ColorSwitcher)
