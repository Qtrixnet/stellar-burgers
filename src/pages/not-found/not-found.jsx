import NotFoundStyles from "./not-found.module.css";
import { Link } from "react-router-dom";
import {
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const NotFound = () => {
  return (
    <section className={NotFoundStyles.wrapper}>
      <p className="text text_type_digits-large text_color_inactive">404</p>
      <p className="text text_type_main-large">
        Страница не найдена
      </p>
      <p className="text text_type_main-medium">
        Ну не найдена и не найдена. У нас есть очень крутые бургеры!
      </p>
      <Link className={NotFoundStyles.link} to="/">
        <Button type="primary" size="medium">
          К бургерам
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
