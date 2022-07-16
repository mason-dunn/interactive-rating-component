import { createContext, useState } from "react";

export const RatingContext = createContext()

export const RatingProvider = ({ children }) => {
  const [currRating, setCurrRating] = useState(5)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  return <RatingContext.Provider 
    value={{ 
      currRating, 
      setCurrRating, 
      isSubmitted, 
      setIsSubmitted
    }}>
    { children }
  </RatingContext.Provider>
}