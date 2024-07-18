import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const App = () => <Feedback resources={resources} />

export default App
/* <div className="all-emojis">
              {emojis.map(eachitem => {
                const {name, imageUrl} = eachitem
                return (
                  <button
                    type="button"
                    className="emojis-container"
                    onClick={this.oncardchange}
                  >
                    <img src={imageUrl} alt={name} className="image-size" />
                    <p className="paragraph">{name}</p>
                  </button>
                )
              })}
            </div> */
