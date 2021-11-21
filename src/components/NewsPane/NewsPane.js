import React from 'react';
import photo from '../../img/cal-img.svg'

import styles from './NewsPane.module.css'

const NewsPane = () => {
    
    return (
        <div className={styles.root}>
           <div className={styles.textWrapper}>
               <h2 className={styles.title}>Наши быстрые тренировки</h2>
               <p className={styles.subtitle}>Экономят ваше время с пользой</p>
           </div>

           <img src={photo} alt="data" />
           
        </div>
        
    );
}

export default NewsPane;