import './index.css'

const ThumnbailItem = props => {
  const {det, imgChangeFun, isClick} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = det
  const onClickChange = () => {
    imgChangeFun(imageUrl, imageAltText, id)
  }

  const classOpacity = isClick ? 'opacity' : ''

  return (
    <li>
      <button type="button" className="button" onClick={onClickChange}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${classOpacity} thumn-img`}
        />
      </button>
    </li>
  )
}

export default ThumnbailItem
