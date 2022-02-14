import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addIngredient } from '../../services/actions/ingredients';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFound from '../../pages/not-found/not-found';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';

const Main = () => {
  const dispatch = useDispatch();
  const chosenIngredients = useSelector(state => state.ingredientsData.chosenIngredients);
  const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

  const handleDrop = (ingredientId) => {
    const targetIngredient = initialIngredients.find(ingredient => ingredient._id === ingredientId._id)
    const selectedBun = chosenIngredients.find(ingredient => ingredient.type === 'bun')
    const selectedBunIndex = chosenIngredients.indexOf(selectedBun)

    if (targetIngredient.type === 'bun' && selectedBun) {
      const chosenIngredientsClone = chosenIngredients.slice();
      chosenIngredientsClone.splice(selectedBunIndex, 1, targetIngredient);
      dispatch(addIngredient(chosenIngredientsClone));
    } else {
      dispatch(addIngredient([...chosenIngredients, targetIngredient]));
    }
  };

  return (
    <main className={`${mainStyles.main} pb-10`}>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route exact path="/">
            <section className={mainStyles.main_container}>
              <BurgerIngredients />
              <BurgerConstructor onDropHandler={handleDrop} />
            </section>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/ingredients">
            <IngredientPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </DndProvider>
    </main>
  );
};

export default Main;