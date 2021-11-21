import { useEffect, useState } from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import mainApi from '../../utils/Api'

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([])

  useEffect(() => {
    mainApi.getIngredients()
      .then(ingredientsData => {
        if (ingredientsData) {
          setIngredientsData(ingredientsData.data)
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <div className={`${appStyles.app} pb-10`}>
      <AppHeader />
      <Main ingredientsData={ingredientsData} />
    </div>
  );
};