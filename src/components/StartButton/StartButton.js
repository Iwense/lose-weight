import React, {useEffect, useState} from 'react';
import play from '../../img/play.svg'
import { STATES, useStore } from '../../store/Store';
import styles from './StartButton.module.css'

const StartButton = () => {

    const store = useStore()
 
    return (
        <div className={styles.root}>
           <p className={styles.title}>Начать тренировку</p>
           <div className={styles.btn} onClick={() => store.setState(STATES.ready)} >
               <img className={styles.icon} src={play} alt={'Кнопка начать'} />
           </div>
        </div>
    );

}

export default StartButton;