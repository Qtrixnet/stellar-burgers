import {FC, useEffect} from 'react';
import feedStyles from './feed.module.css';
import OrdersList from "../../components/orders-list/orders-list";
import OrdersInfo from "../../components/orders-info/orders-info";
import {wsAllOrdersConnectionClosed, wsAllOrdersConnectionStart} from "../../services/actions/orders";
import {useDispatch} from "../../services/hooks/hooks";

const Feed: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(wsAllOrdersConnectionStart());

    return () => {
      dispatch(wsAllOrdersConnectionClosed())
    }
  }, [dispatch])
  
  return (
    <article className={feedStyles.container}>
      <OrdersList/>
      <OrdersInfo/>
    </article>
  );
};

export default Feed;
