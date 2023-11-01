// import {Link} from 'react-router-dom';
import React, {useEffect, useState, useRef} from 'react';


//import styles
import styles from './header.module.scss'


// import img
import img__logo from '../../img/ElegantLogo.png'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from  '@fortawesome/free-solid-svg-icons';

const headerMenu = [
    {
        name: 'Главная',
        link: 'MainBlock'
    },
    {
        name: 'Почему мы',
        link: 'Whywe'
    },
    {
      name: 'Услуги',
      link: 'Service'
    },
    {
      name: 'Страховые случаи',
      link: 'Insurance',
    },
    {
      name: 'Отзывы',
      link: 'Review'
    },
    {
        name: 'Контакты',
        link: 'Contact',
    },
    {
      name: 'Связяться с нами',
      link: 'Form'
    }
    

]

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
  
    const toggleMenu = () => {
      setOpen(!isOpen);
    };

    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth', // Добавьте плавный скролл
        });
      }
      setOpen(false); // Закрываем меню после прокрутки
    };
   
    return (
      <div className={styles.header}>
        <div className={styles.header__block}>
          <div className={styles.container}>
            <div className={styles.menu__link} ref={menuRef}>
              <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
                {headerMenu.map((item, indx) => (
                  <div key={indx}>
                    <a  
                    className={`${styles.nav__link} ${item.name === 'Связяться с нами' ? styles.specialButton : ''}`} 
                    onClick={() => scrollToElement(item.link)}>
                    {item.name}
                    </a>
                  </div>
                ))}
              </nav>


              <div className={styles.adaptive}>
                  <div className={styles.info__logo}>
                      <img src={img__logo} alt="My Image" className={styles.img__logo}/>
                      <div className={styles.info__block}>
                        <p className={styles.logo__text}>Aripov&partners</p>
                        <span className={styles.phone__number}> Горячая линия: <strong>8(707)203-52-04</strong></span>
                      </div>
                      
                  </div>
                <button className={styles.burgerIcon} onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );

  };
  
  export default Header;
  
  
  