import { useContext } from 'react';
import FormCard from './components/FormCard'
import SubmitCard from './components/SubmitCard'
import { RatingContext, RatingProvider } from './context/RatingContext';

function App() {
  const { isSubmitted } = useContext(RatingContext)

  return (
    <main className="container">
      { isSubmitted ? <SubmitCard /> : <FormCard />}
    </main>
  )
}
export default App