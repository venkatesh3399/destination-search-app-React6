import './index.css'

const DestinationItem = props => {
  const {destItem} = props
  const {name, imgUrl} = destItem

  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
