import React, {useEffect, useState} from 'react';
import pause from '../../img/pause.svg'
import styles from './PauseButton.module.css'



const PauseButton = () => {
   
    return (
        <div className={styles.root}>
           <p className={styles.title}>Пауза</p>
           <div className={styles.btn}>
               <img className={styles.icon} src={pause} alt={'Кнопка пауза'} />
           </div>
        </div>
    );
}

export default PauseButton;