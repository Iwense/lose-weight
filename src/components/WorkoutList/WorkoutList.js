import React from 'react';
import {Workout} from '../Workout'
import styles from './WorkoutList.module.css'
import {useStore} from '../../store/Store'

const WorkoutList = () => {

    const {currentWorkout } = useStore()


    return (
        <div className={styles.root}>
           <p className={styles.title}>Упражнения</p>
            {currentWorkout.exercises.map(exercise => {
                return <Workout key={exercise.id} name={exercise.name} second={exercise.second} picture={exercise.picture}/>
            })}
        </div>
    );
}

export default WorkoutList;