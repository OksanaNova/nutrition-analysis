
import { useEffect, useState } from 'react';
import './App.css'
import LoaderPage from './LoaderPage';

function App() {

  // https://api.edamam.com/api/nutrition-data?app_id=1f7bf3d0&app_key=%20c96484924128aeb3cec27d734466aae1&nutrition-type=cooking&ingr=avocado

  const [myNutrition, setMyNutrition] = useState();
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

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
    } else {
      setStateLoader(false);
      alert('ingredients entered incorrectly')
    }
  }

  useEffect(() => {
    let ingr = ['avocado'];
    fetchData(ingr)
  })


 







  return (
    <>
    {stateLoader && <LoaderPage />}

    

    </>
  )
}

export default App
