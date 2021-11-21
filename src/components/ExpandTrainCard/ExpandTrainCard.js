import React from 'react';
import styles from './ExpandTrainCard.module.css'
import {pictureStyle} from '../../utils'
import picture from '../../img/1.jpg'
import time from '../../img/time.svg'
import energy from '../../img/energy.svg'
import {useStore} from '../../store/Store'


const ExpandTrainCard = () => {
    const store = useStore();
    const { currentWorkout } = store

    return (
        <div className={styles.root} >
            <div className={styles.image} style={pictureStyle(currentWorkout.picture)} />
            <div className={styles.desc}>
                <p className={styles.title}>{currentWorkout?.title} </p>
                <div className={styles.wrapperSpan}>
                    <span className={styles.span}>
                        <p className={styles.subtitle}>{currentWorkout?.time} мин</p>
                        <img className={styles.icon} src={time} alt={'Время'} />
                    </span>

                    <span className={styles.span}>
                        <p className={styles.subtitle}>{currentWorkout?.calory} ккал</p>
                        <img className={styles.icon} src={energy} alt={'Энергия'} />
                    </span>
                </div>
                
            </div>
        </div>
    );
}

export default ExpandTrainCard;