import React, {useEffect, useState} from 'react';
import { STATES, useStore } from '../../store/Store';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styles from './TimerButton.module.css'

const startTime = 5

const TimerButton = ({go}) => {
    const [sec, setSec] = useState(startTime);
    const store = useStore();

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(prev => prev - 1)
        }, 1000)
        if (sec === 0) {
            clearInterval(timer);
            store.setState(STATES.tick)
            go('process');
        }
        return () => clearInterval(timer);
    })

    return (
        <div className={styles.root}>
           <p className={styles.title}>Приготовьтесь</p>
           <CountdownCircleTimer
                isPlaying
                duration={startTime}
                size={100}
                strokeWidth={4}
                colors={[
                    ['#b883df', 1],
                ]}
            >
                {({ remainingTime }) => (
                    <p className={styles.readySecond}>{remainingTime}</p>
                )}
            </CountdownCircleTimer>
        </div>
    );

}

export default TimerButton;