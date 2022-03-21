import {useEffect, FC} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import appStyles from './app.module.css';
import Header from '../header/header';
import Loader from '../loader/loader';
import {getIngredients} from '../../services/actions/ingredients';
import ModalSwitch from '../modal-switch/modal-switch';
import {getUserData} from '../../services/actions/user';
import {wsAllOrderConnectionStart, wsUserOrderConnectionStart} from '../../services/actions/orders';

const App: FC = () => {
  const ingredientsRequest = useSelector((state: RootStateOrAny) => state.ingredientsData.ingredientsRequest);
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootStateOrAny) => state.userData.accessToken);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserData(accessToken));
    dispatch(wsAllOrderConnectionStart());
    dispatch(wsUserOrderConnectionStart());
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