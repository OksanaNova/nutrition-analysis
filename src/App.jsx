
import { useEffect, useState } from 'react';
import './App.css'
import LoaderPage from './LoaderPage';
import Nutrition from './Nutrition';

function App() {

  const [myNutrition, setMyNutrition] = useState();

  const [stateLoader, setStateLoader] = useState(false);

  const [userSearch, setUserSearch] = useState('');

  const [wordSubmitted, setWordSubmitted] = useState('');


  const MY_KEY = '22c47ce5975fa1e56c78741144731443';
  const MY_ID = 'eec9b69c';
  const MY_URL = 'https://api.edamam.com/api/nutrition-details';

  const fetchData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${MY_URL}?app_id=${MY_ID}&app_key=${MY_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
      // console.log(data)
    } else {
      setStateLoader(false);
      alert('ingredients entered incorrectly')
    }
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])

      const nutritionSearch = (e) => {
        setUserSearch(e.target.value)
      }

      const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(userSearch)
      }

  return (
    <div className='main-container'>
    {stateLoader && <LoaderPage />}

    <div className='header'>
      <h1>Nutrition Analysis</h1>
      <p>Enter an ingredient list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.</p>
    </div>

    <form onSubmit={finalSearch}>
      <input 
      placeholder='Type your ingridients..'
      onChange={nutritionSearch}
      value={userSearch} />
      <button>search</button>
    </form>

    { myNutrition && <Nutrition myNutrition={myNutrition} />}

    </div>
  )
}

export default App
