// import React, { useState } from 'react';
// import styles from './review.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Review = () => {
//   const totalSlides = 1;
//   const slidesToShow = 1;

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className={styles.review__block}>
//       <div className={styles.container}>
//         <div className={styles.title__main__inner}>
//           <div className={styles.title__main__title}>Отзывы</div>
//           <div className={styles.title__main__suptitle}>
//             Успешно выполняем запросы заказчика <br />
//             и качественно решаем непростые задачи по доступной цене.
//           </div>
//         </div>

//         <div className={styles.review__inner}>
        
//           <div onClick={prevSlide}>
//             <FontAwesomeIcon className={`${styles.arrow__icons} ${styles.left}`} icon={faArrowLeft} />
//           </div>

//           <div className={styles.slidesContainer}>
//             {[...Array(slidesToShow)].map((_, index) => (
//               <div className={styles.review__item} key={index}>
//                 <div className={styles.review__content}>
//                   <div className={styles.review__content__title}>
//                     <div className={styles.review__content__name}>
//                       <h3>Ikram</h3> <span>г.Алматы</span>
//                     </div>
//                     <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
//                   </div>

//                   <div className={styles.review__decor}></div>

//                   <p className={styles.review__text}>
//                     Пишу вам слова благодарности за успешное решение моего дела! Очень рада, что обратилась именно к
//                     вам. Итог: выиграли разницу в 450 000 тг, советую.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div onClick={nextSlide}>
//             <FontAwesomeIcon className={`${styles.arrow__icons} ${styles.right}`} icon={faArrowRight} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;



import React, { useState } from 'react';
// styles
import styles from './review.module.scss'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteRight} from  '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from  '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from  '@fortawesome/free-solid-svg-icons';

const Review = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;
    const slidesToShow = 1; 
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      console.log('next')
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
      console.log('prev')
    };

  return (
    <div>
      {/* review block */}
      <div className={styles.review__block}>
        <div className={styles.container}>

            <div className={styles.review__inner}>

                    <div className={styles.title__main__inner}>
                        <div className={styles.title__main__title}>Отзывы</div>
                        <div className={styles.title__main__suptitle}>Успешно выполняем запросы заказчика <br/>
                        и качественно решаем непростые задачи по доступной цене.
                        </div>
                    </div>

                
                

                    {[...Array(slidesToShow)].map((_, index) => (
                        <div className={styles.review__item}>
                            <div className={styles.review__content}>

                                <div className={styles.review__content__title}>
                                    <div className={styles.review__content__name}>
                                        <h3>Ikram</h3>  <span>г.Алматы</span>
                                    </div>
                                    <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
                                </div>

                                <div className={styles.review__decor}></div>

                                <p className={styles.review__text}>
                                    Пишу вам слова благодарности за успешное решение моего дела!
                                    Очень рада, что обратилась именно к вам. 
                                    Итог: выиграли разницу в 450 000 тг, советую. 
                                </p>
                            </div>

                            <div className={styles.arrows}>
                            <div onClick={prevSlide}><FontAwesomeIcon className={`${styles.arrow__icons} ${styles.left}`} icon={faArrowLeft} /></div>
                            <div  onClick={nextSlide}><FontAwesomeIcon className={`${styles.arrow__icons} ${styles.right}`} icon={faArrowRight} /></div>
                          </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    </div>
  )
}

export default Review

// <div className={styles.review__item}>
{/* <div className={styles.review__content}>

<div className={styles.review__content__title}>
    <div className={styles.review__content__name}>
        <h3>Ikram</h3>  <span>г.Алматы</span>
    </div>
    <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
</div>

<div className={styles.review__decor}></div>

<p className={styles.review__text}>
    Пишу вам слова благодарности за успешное решение моего дела!
    Очень рада, что обратилась именно к вам. 
    Итог: выиграли разницу в 450 000 тг, советую. 
</p>
</div>
</div>

<div className={styles.review__item}>
<div className={styles.review__content}>

<div className={styles.review__content__title}>
    <div className={styles.review__content__name}>
        <h3>Ikram</h3>  <span>г.Алматы</span>
    </div>
    <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
</div>

<div className={styles.review__decor}></div>

<p className={styles.review__text}>
    Пишу вам слова благодарности за успешное решение моего дела!
    Очень рада, что обратилась именно к вам. 
    Итог: выиграли разницу в 450 000 тг, советую. 
</p>
</div>
</div>

<div className={styles.review__item}>
<div className={styles.review__content}>

<div className={styles.review__content__title}>
    <div className={styles.review__content__name}>
        <h3>Ikram</h3>  <span>г.Алматы</span>
    </div>
    <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
</div>

<div className={styles.review__decor}></div>

<p className={styles.review__text}>
    Пишу вам слова благодарности за успешное решение моего дела!
    Очень рада, что обратилась именно к вам. 
    Итог: выиграли разницу в 450 000 тг, советую. 
</p>
</div>
</div>

<div className={styles.review__item}>
<div className={styles.review__content}>

<div className={styles.review__content__title}>
    <div className={styles.review__content__name}>
        <h3>Ikram</h3>  <span>г.Алматы</span>
    </div>
    <FontAwesomeIcon className={styles.content__icon} icon={faQuoteRight} />
</div>

<div className={styles.review__decor}></div>

<p className={styles.review__text}>
    Пишу вам слова благодарности за успешное решение моего дела!
    Очень рада, что обратилась именно к вам. 
    Итог: выиграли разницу в 450 000 тг, советую. 
</p>
</div>
</div> */}