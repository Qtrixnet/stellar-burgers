import loaderStyles from './loader.module.css';

const Loader = () => <div className={loaderStyles.loader_container}>
  <div className={loaderStyles.loader}></div>
</div>

export default Loader;