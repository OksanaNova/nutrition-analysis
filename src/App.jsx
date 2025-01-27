
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





  return (
    <>
    {stateLoader && <LoaderPage />}

    

    </>
  )
}

export default App
