import {FC} from 'react';
import feedStyles from './feed.module.css';
import OrdersList from "../../components/orders-list/orders-list";
import OrdersInfo from "../../components/orders-info/orders-info";

const Feed: FC = () => {

  return (
    <article className={feedStyles.container}>
      <OrdersList/>
      <OrdersInfo/>
    </article>
  );
};

export default Feed;
