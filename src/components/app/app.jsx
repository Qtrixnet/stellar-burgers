import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from './app.module.css';
import Header from '../header/header';
import Loader from '../loader/loader';
import { getIngredients } from '../../services/actions/ingredients';
import ModalSwitch from '../modal-switch/modal-switch';

const App = () => {
  const ingredientsRequest = useSelector(state => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <div className={`${appStyles.app}`}>
      {
        ingredientsRequest ? (<Loader />) :
          <>
            <Header />
            <ModalSwitch />
          </>
      }
    </div >

  );
};

export default App;