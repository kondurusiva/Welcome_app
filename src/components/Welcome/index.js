// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButton = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'subscribed' : 'subscribe'
  }

  render() {
    const {buttonText} = this.getButton()

    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy learning</p>
        <button type="button">{buttonText}</button>
      </div>
    )
  }
}
export default Welcome
