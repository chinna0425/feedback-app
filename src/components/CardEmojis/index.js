import './index.css'

const Cardemojis = props => {
  const {eachcard, oncardchange} = props
  const {name, imageUrl} = eachcard
  const elementchange = () => {
    oncardchange()
  }
  return (
    <li>
      <button
        type="button"
        className="emojis-container"
        onClick={elementchange}
      >
        <img src={imageUrl} alt={name} className="image-size" />
        <p className="paragraph">{name}</p>
      </button>
    </li>
  )
}
export default Cardemojis
