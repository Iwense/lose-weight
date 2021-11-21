import React from 'react';
import styles from './ExerciseCard.module.css'
import {pictureStyle} from '../../utils'
import time from '../../img/time.svg'
import energy from '../../img/energy.svg'
import {useStore} from '../../store/Store'


const ExerciseCard = () => {
    const store = useStore();
    const { currentWorkout } = store
    const { currentExercise} = currentWorkout

    return (
        <div className={styles.root} >
            <div className={styles.image} style={pictureStyle(currentExercise.picture)} />
            <div className={styles.desc}>
                <p className={styles.title}>{currentExercise.name} </p>
                <div className={styles.wrapperSpan}>
                    <span className={styles.span}>
                        <p className={styles.subtitle}>{currentExercise.second} сек.</p>
                        <img className={styles.icon} src={time} alt={'Время'} />
                    </span>

                    <span className={styles.span}>
                        <p className={styles.subtitle}>{currentExercise?.calory} ккал</p>
                        <img className={styles.icon} src={energy} alt={'Энергия'} />
                    </span>
                </div>
                
            </div>
        </div>
    );
}

export default ExerciseCard;