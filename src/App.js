import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
// components 
import Header from './components/header/Header'

import DopInfo from './components/dopInfo/Dopinfo'
import MainBlock from './components/mainBlock/MainBlock';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Service from './components/service/Service';
import Standart from './components/standart/Standart';
import IncludeAll from './components/allinclude/IncludeAll';
import Independence from './components/independence/Independence';

import Modal from './components/modal/Modal'
import Footer from './components/footer/Footer'
import Form from './components/form/Form'

import Connection from './components/connection/Connection';

// styles
import styles from '../src/App.module.scss';

function App() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <Router>
      {/* <div> */}
          <div className={styles.stucture}>
          
            
            <Header/>
            <DopInfo/>
            
            <div className={styles.info__block}>
                <Routes>
                  <Route path='/' element={<MainBlock />} />
                  <Route path='/MainBlock' element={<MainBlock/>}></Route>
                  <Route path='/Contact' element={<Contact/>}></Route>
                  <Route path='/About' element={<About/>}></Route>
                  <Route path='/Service' element={<Service/>}></Route>

                  {/* services */}
                  <Route path='/Standart' element={<Standart/>}></Route>
                  <Route path='/IncludeAll' element={<IncludeAll/>}></Route>
                  <Route path='/Independence' element={<Independence/>}></Route>

                  <Route path='/Form' element={<Form/>}></Route>


                </Routes>
            </div>
            <Footer/>
{/*             
            <Connection setModalActive={setModalActive} />


            <Modal active={modalActive} setActive={setModalActive}/> */}
          </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
