import NotFoundStyles from "./not-found.module.css";
import {Link} from "react-router-dom";
import {
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from 'react';

const NotFound: FC = () => {
  return (
    <article className={NotFoundStyles.wrapper}>
      <p className="text text_type_digits-large text_color_inactive">404</p>
      <h1 className="text text_type_main-large">
        Страница не найдена
      </h1>
      <h2 className="text text_type_main-medium">
        Ну не найдена и не найдена. У нас есть очень крутые бургеры!
      </h2>
      <Link className={NotFoundStyles.link} to="/">
        <Button type="primary" size="medium">
          К бургерам
        </Button>
      </Link>
    </article>
  );
};

export default NotFound;
