import { useEffect, useState } from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import mainApi from '../../utils/Api'

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([])

  useEffect(() => {
    mainApi.getIngredients()
      .then(data => {
        if (data) {
          setIngredientsData(data.data)
        }
      })
      .catch(err => { console.log(err)})
  }, [])

  return (
    <div className={`${appStyles.app} pb-10`}>
      <AppHeader />
      <Main />
    </div>
  );
};