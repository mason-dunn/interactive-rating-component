function SelectRating() {
  return (
    <div className="select-rating">
      {
        Array.from({ length: 5 }, (_, index) => (
          <button>{ index + 1 }</button>
        ))
      }
    </div>
  )
}
export default SelectRating