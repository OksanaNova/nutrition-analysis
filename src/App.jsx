
import { useEffect, useState } from 'react';
import './App.css'
import LoaderPage from './LoaderPage';
import Nutrition from './Nutrition';

function App() {

  // const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const MY_KEY = 'c96484924128aeb3cec27d734466aae1';
  const MY_ID = '1f7bf3d0';
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

    // let result = await response.json();
    // console.log(result)

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      console.log(data)
      // setMyNutrition(data);
      // console.log(Object.values(data))
    } else {
      setStateLoader(false);
      alert('ingredients entered incorrectly')
    }
  }

  useEffect(() => {
    let ingr = ['1 avocado'];
    fetchData(ingr)
  }, [])




  return (
    <>
    {stateLoader && <LoaderPage />}

    <div>
      <h1>Nutrition Analysis</h1>
      <h4>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.</h4>
    </div>

    <form>
      <input placeholder='Type your ingridients..' />
      <button>search</button>
    </form>

    <Nutrition />



    

    </>
  )
}

export default App
