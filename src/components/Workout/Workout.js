import React from 'react';
import {pictureStyle} from '../../utils'
import time from '../../img/time.svg'

import styles from './Workout.module.css'


const Workout = ({picture, name, second}) => {

    return (
        <div className={styles.root}>
            <div className={styles.left}>
                <div className={styles.image} style={pictureStyle(picture)}/>
                <p className={styles.title}>{name}</p>
            </div>

            <div className={styles.right}>
                <img className={styles.icon} src={time} alt={'Время'} />
                <p className={styles.subtitle}>{second} сек.</p>
            </div>
           
        </div>
    );
}

export default Workout;