
import './App.css';
import { useState } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  const [main, setMain] = useState(true)
  return (
    <div className="App">

      <div className='container'>
        <div>
          <button onClick={() => setMain(true)} >PageOne !</button>
          <button onClick={() => setMain(false)}>PageTwo !</button>
        </div>
        {
          main ? <PageOne /> : <PageTwo />
        }
      </div>
    </div>
  );
}

export default App;
