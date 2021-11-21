import React, {useEffect, useState} from 'react'
import { useStore } from '../../store/Store'
import styles from './Timer.module.css'


const Timer = () => {
    const {currentWorkout} = useStore()
    const {currentExercise} = currentWorkout

    const [sec, setSec] = useState(currentExercise.second);

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(prev => prev - 1)
        }, 1000)
        if (sec === 0) {
            clearInterval(timer);
            // currentExercise.next()
        }
        return () => clearInterval(timer);
    })

    return (
        <div className={styles.tickWrapper}>
            <div className={styles.second}>{`0:${sec}`}</div>
        </div>
    )
}

export default Timer