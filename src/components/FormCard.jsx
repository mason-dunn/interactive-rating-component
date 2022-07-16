import { useContext } from "react"
import { RatingContext } from "../context/RatingContext"
import SelectRating from "./SelectRating"
import Card from "./shared/Card"
import Star from "./Star"

function FormCard() {
  const { setIsSubmitted } = useContext(RatingContext)

  return (
    <Card>
      <Star />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <SelectRating />
      <button onClick={ () => setIsSubmitted(true) } className="submit">Submit</button>
    </Card>
  )
}
export default FormCard