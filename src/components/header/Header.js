import {Link} from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

//import styles
import styles from './header.module.scss'

// component
import Form from '../form/Form';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from  '@fortawesome/free-solid-svg-icons';

const headerMenu = [
    {
        name: 'Главная',
        link: '/MainBlock'
    },
    {
        name: 'О компании',
        link: '/About'
    },
    {
        name: 'Услуги',
        link: '/Service'
    },
    {
        name: 'Контакты',
        link: '/Contact',
    },
    

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
  
    return (
      <div className={styles.header}>
        <div className={styles.header__block}>
          <div className={styles.container}>
            <div className={styles.menu__link} ref={menuRef}>
              <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
                {headerMenu.map((item, indx) => (
                  <div key={indx}>
                    <Link to={item.link} className={styles.nav__link} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
              <button className={styles.burgerIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className={styles.ContactUsForm}>
                <Link className={styles.toLinkDiscount} to="/Form">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  
  
  
  
  
// const Header = () => {

//     const [isOpen, setOpen] = useState();


    
//   return (
    
//     <div className={styles.header}>
//         <div className={styles.header__block}>
//             <div className={styles.container}>
//                 <div className={styles.menu__link}>
                
                    
//                     <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
//                         {headerMenu.map((item, indx) => (
//                             <div key={indx}>
//                                 <Link to={item.link} 
//                                 className={styles.nav__link}
//                                 onClick={() => setOpen(false)}>{item.name}</Link>
//                             </div>
//                         ))}
//                     </nav>

//                     <button 
//                         className={styles.burgerIcon}
//                         onClick={() => setOpen(!isOpen)}
//                     >
//                         <FontAwesomeIcon icon={faBars} />
//                     </button>

//                     <div className={styles.ContactUsForm}>
//                         <Link className={styles.toLinkDiscount} to="/Form">Связаться с нами</Link>
//                     </div>


//                 </div>
//             </div>            
//         </div>
//     </div>
    
//   )
// }

// export default Header
