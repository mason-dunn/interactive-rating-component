import Card from "./shared/Card"
import SubmittedImage from '../assets/illustration-thank-you.svg'
import YourRating from "./YourRating"

function SubmitCard() {
  return (
    <Card>
      <div className="submitted">
        <div className="submitted-top">
          <img src={ SubmittedImage } alt="Rating Submitted" />
          <YourRating />
        </div>
        <div className="submitted-bottom">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </Card>
  )
}
export default SubmitCard