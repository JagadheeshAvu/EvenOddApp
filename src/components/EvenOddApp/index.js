// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="inner-container">
          <div className="bg-container">
            <h1 className="count">Count {count}</h1>
            <p className="displayText">Count is {displayText}</p>
            <div className="btn-container">
              <button
                className="button"
                type="button"
                onClick={this.onIncrement}
              >
                Increment
              </button>
            </div>
            <p className="note">Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
