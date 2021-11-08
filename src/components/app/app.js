import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'
import Main from '../main/main';

export default function App() {
  return (
    <div className={`${appStyles.app} pb-10`}>
      <AppHeader />
      <Main />
    </div>
  ); 
};