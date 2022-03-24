import {FC} from 'react';
import feedStyles from './feed.module.css';
import OrdersList from "../../components/orders-list/orders-list";
import OrdersInfo from "../../components/orders-info/orders-info";
import {useParams} from "react-router-dom";

const Feed: FC = () => {
  const params = useParams();
  return (
    <article className={feedStyles.container}>
      <OrdersList/>
      <OrdersInfo/>
    </article>
  );
};

export default Feed;
