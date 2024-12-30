import './App.css'
import { aiueo, questionTitle } from './constants';

const firstStr =() => {
  const randomIndex = Math.floor(Math.random() * aiueo.length);
  return aiueo[randomIndex];
}

const title = () => {
  const randomIndex = Math.floor(Math.random() * questionTitle.length);
  return questionTitle[randomIndex];
}

function App() {

  return (
    <>
      <h1>お題</h1>
      <p className='big'>
        「{firstStr()}」ではじまる、<br></br>「{title()}」
      </p>
    </>
  )
}

export default App
