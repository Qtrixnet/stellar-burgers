import React from 'react';
import feedStyles from './feed.module.css';
import OrderList from "../../components/orders-list/orders-list";

const Feed = () => {
  return (
    <article className={feedStyles.container}>
      <OrderList/>
    </article>
  );
};

export default Feed;
