import {useEffect, FC} from 'react';
import appStyles from './app.module.css';
import Header from '../header/header';
import Loader from '../loader/loader';
import {getIngredients} from '../../services/actions/ingredients';
import ModalSwitch from '../modal-switch/modal-switch';
import {getUserData} from '../../services/actions/user';
import {useDispatch, useSelector} from "../../services/hooks/hooks";

const App: FC = () => {
  const ingredientsRequest = useSelector((state) => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userData.accessToken);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserData(accessToken));
  }, [dispatch, accessToken])

  return (
    <div className={`${appStyles.app}`}>
      {
        ingredientsRequest ? (<Loader/>) :
          <>
            <Header/>
            <ModalSwitch/>
          </>
      }
    </div>

  );
};

export default App;