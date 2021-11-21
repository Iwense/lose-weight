import React from 'react';
import {pictureStyle} from '../../utils'
import {useStore} from '../../store/Store'
import styles from './TrainCard.module.css'


const TrainCard = ({go, workout}) => {
    const store = useStore()
    const { picture, name, time} = workout

    const handleClick = () => {
        go('excerciseDescription')
        store.setCurrentWorkout(workout)
    }
    
    return (
        <div className={styles.root} onClick={handleClick}  >
            <div className={styles.image} style={pictureStyle(picture)} />
            
            <div className={styles.text}>
                <p className={styles.title}>{name}</p>
                <p className={styles.subtitle}>{time} мин</p>
            </div>
           
        </div>
        
    );
}

export default TrainCard;