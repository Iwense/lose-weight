import React, {useEffect, useState} from 'react';
import pause from '../../img/pause.svg'
import play from '../../img/play.svg'
import styles from './PlayButton.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const STATES = {
    start: 'start',
    ready: 'ready',
    tick: 'tick',
    next: 'next',
    pause: 'pause',
    finish: 'finish',
}

const TickState = ({handleTimeover, handlePauseClick}) => {
    const [sec, setSec] = useState(40);

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(prev => prev - 1)
        }, 1000)
        if (sec === 0) {
            clearInterval(timer);
            handleTimeover();
        }
        return () => clearInterval(timer);
    })

    return (
        <div className={styles.tickWrapper}>
            <div className={styles.second}>{`0:${sec}`}</div>
            <div className={styles.root}>
                <p className={styles.title}>Пауза</p>
                <div className={styles.btn} onClick={handlePauseClick}>
                    <img className={styles.icon} src={pause} alt={'Кнопка пауза'} />
                </div>
            </div>
        </div>
    );
}

const PlayButton = ({type}) => {
    const [state, setState]  = useState(STATES.start)

    const startClick = () => {
        setState(STATES.ready)
    }

    const pauseClick = () => {
        setState(STATES.pause)
    }

    const readyTimeover = () => {
        setState(STATES.tick)
    }
    
    const handleWorkoutOver = () => {
        setState(STATES.next)
    }

    if (state === STATES.start) 
    return (
        <div className={styles.root}>
           <p className={styles.title}>Начать тренировку</p>
           <div className={styles.btn} onClick={startClick}>
               <img className={styles.icon} src={play} alt={'Кнопка начать'} />
           </div>
        </div>
    );

    if (state === STATES.ready || state === STATES.next) 
        return <ReadyState handleTimeover={readyTimeover} type={state}/>

    if (state === STATES.tick) 
        return <TickState handlePauseClick={pauseClick} handleTimeover={handleWorkoutOver} />

    if (state === STATES.pause) 
    return (
        <div className={styles.root}>
           <p className={styles.title}>Пауза</p>
           <div className={styles.btn}>
               <img className={styles.icon} src={pause} alt={'Кнопка пауза'} />
           </div>
        </div>
    );
}

export default PlayButton;