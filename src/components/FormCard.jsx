import SelectRating from "./SelectRating"
import Card from "./shared/Card"
import Star from "./Star"

function FormCard() {
  return (
    <Card>
      <Star />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <SelectRating />
      <button className="submit">Submit</button>
    </Card>
  )
}
export default FormCard