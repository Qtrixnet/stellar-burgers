import loaderStyles from "./loader.module.css";
import {FC} from 'react';

const Loader:FC = () => (
  <div className={loaderStyles.loader_container}>
    <div className={loaderStyles.loader}></div>
  </div>
);

export default Loader;
