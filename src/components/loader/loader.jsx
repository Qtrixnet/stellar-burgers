import loaderStyles from './loader.module.css';

export default function Loader() {

  return (
    <div className={loaderStyles.loader_container}>
      <div className={loaderStyles.loader}></div>
    </div>
  );
};
