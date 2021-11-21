import React from 'react';
import WorkoutsList from '../../store/WorkoutsList/WorkoutsList';
import {TrainCard} from '../TrainCard'
import styles from './TrainCardList.module.css'

const TrainCardList = ({go}) => {
    
    return (
        <div className={styles.wrapper}>
            {WorkoutsList.getAll.map(workout => (
                <TrainCard key={workout.id} go={go} workout={workout}/>
            ))}
        </div>
        
    );
}

export default TrainCardList;