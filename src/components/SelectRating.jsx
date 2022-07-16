import { useContext } from "react"
import { RatingContext } from "../context/RatingContext"

function SelectRating() {
  const { currRating, setCurrRating } = useContext(RatingContext)

  return (
    <div className="select-rating">
      {
        Array.from({ length: 5 }, (_, index) => (
          <button 
            key={ index + 1 } 
            className={ currRating === index + 1 ? "selected" : null }
            value={ index + 1 }
            onClick={ (e) => setCurrRating(parseInt(e.target.value)) }
            >
            { index + 1 }
          </button>
        ))
      }
    </div>
  )
}
export default SelectRating