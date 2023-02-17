// Write your code here

import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  /* buttonText = () => {
    const {isDark} = this.state
    return isDark ? 'Dark Mode' : 'Light Mode'
  } */

  render() {
    const {isDark} = this.state
    const buttonText = isDark ? 'Dark Mode' : 'Light Mode'
    const modeClassName = isDark ? 'Light-Mode' : 'Dark-Mode'

    return (
      <div className="background">
        <div className={`card ${modeClassName}`}>
          <h1 className="heading"> Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
