import React from 'react';
// import { Route, Switch } from "react-router-dom";
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header'

export default function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader /> 
    </div>
  ); 
};