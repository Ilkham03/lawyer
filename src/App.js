// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
// components 
import Header from './components/header/Header'

import DopInfo from './components/dopInfo/Dopinfo'
import MainBlock from './components/mainBlock/MainBlock';
import HowWeWork from './components/contact/HowWeWork';
import Insurance from './components/insurance/Insurance';
import WhyWe from './components/whyWe/WhyWe';
import Review from './components/review/Review'
import Service from './components/service/Service';
import Footer from './components/footer/Footer'
import Form from './components/form/Form'


// styles
import styles from '../src/App.module.scss';

function App() {
  return (
    <div className={styles.stucture}>
      <Header/>
      <DopInfo/>
            
        <div className={styles.info__block}>
          <MainBlock /> 
          <WhyWe/>
          <HowWeWork/>
          <Service/>
          <Insurance/>
          <Review/>
          <Form/>
        </div>
      <Footer/>
    </div>
  );
}



export default App;

