import React from 'react';
import feedStyles from './feed.module.css';
import OrderList from "../../components/orders-list/orders-list";
import OrderInfo from "../../components/orders-info/orders-info";

const Feed = () => {
  return (
    <article className={feedStyles.container}>
      <OrderList/>
      <OrderInfo />
    </article>
  );
};

export default Feed;
