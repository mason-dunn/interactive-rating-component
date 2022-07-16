import FormCard from './components/FormCard'
import SubmitCard from './components/SubmitCard'

function App() {
  const submitted = false;

  return (
    <main className="container">
      { submitted ? <SubmitCard /> : <FormCard />}
    </main>
  )
}
export default App