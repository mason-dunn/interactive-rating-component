import { useContext } from "react"
import { RatingContext } from "../context/RatingContext"

function YourRating() {
  const { currRating } = useContext(RatingContext)

  return (
    <div className="your-rating">
      <p>You selected { currRating } out of 5</p>
    </div>
  )
}
export default YourRating