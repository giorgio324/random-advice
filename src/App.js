import { useState, useEffect } from 'react';
import './App.css';
import { BsDice5Fill } from 'react-icons/bs';
const url = 'https://api.adviceslip.com/advice';
function App() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const fetchRequest = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setText(data);
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (loading) {
    return (
      <main>
        <div className='loading'>
          <h1>loading...</h1>
        </div>
      </main>
    );
  }
  // prettier-ignore
  const {slip: { id, advice }} = text;
  return (
    <main>
      <section>
        <p className='advice-id'>Advice #{id}</p>
        <h3 className='advice'>{advice}</h3>
        <div className='underline-container'>
          <div className='underline'></div>
          <div className='pause-container'>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='underline'></div>
        </div>
        <button
          className='btn-generate'
          onClick={() => {
            fetchRequest();
          }}
        >
          <BsDice5Fill size={25} />
        </button>
      </section>
    </main>
  );
}

export default App;
