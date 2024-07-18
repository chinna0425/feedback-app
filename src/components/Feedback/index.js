import {Component} from 'react'
import Cardemojis from '../CardEmojis'
import './index.css'

class Feedback extends Component {
  state = {status: true}

  oncardchange = () => {
    this.setState(prevstate => ({status: !prevstate.status}))
  }

  render() {
    const {resources} = this.props
    const {status} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="background-container">
        {status && (
          <div className="inner-container">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="all-emojis">
              {emojis.map(eachitem => (
                <Cardemojis
                  eachcard={eachitem}
                  key={eachitem.id}
                  oncardchange={this.oncardchange}
                />
              ))}
            </ul>
          </div>
        )}
        {!status && (
          <div className="inner-container">
            <div>
              <img
                src={loveEmojiUrl}
                alt="love emoji"
                className="loveimage-size"
              />
              <h1 className="loveparagraph">Thank You</h1>
            </div>
            <p className="paragraph">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
