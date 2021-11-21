import React from 'react';
import PropTypes from 'prop-types';
import {ExerciseCard} from '../../components/ExerciseCard'
import {PauseButton} from '../../components/PauseButton';
import {Timer} from '../../components/Timer';
import { observer } from 'mobx-react-lite';
import {STATES, useStore} from '../../store/Store'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import styles from './Process.module.css'

const Process = observer(({ id, go }) => {
	const store = useStore()
	const {currentWorkout, state} = store

	console.log("store", store)


	if (!currentWorkout) {
		return (
			<p className={styles.title}>Тренировки такой нет</p>
		)
	}

	const handleClick = () => {
		store.setState(STATES.start)
		go('excerciseDescription')
	}

	return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={handleClick} />}
			>
				<p className={styles.title}>{currentWorkout?.name ?? 'Тренировка'}</p>
			</PanelHeader>
			<div className={styles.wrapper}>
				<ExerciseCard />
				<div className={styles.main}>
					
					<Timer />
				</div>
				<div className={styles.footer}>
					{state === STATES.tick && <PauseButton />}
					{state === STATES.pause && <TimerButton />}
				</div>
				
			</div>
		</Panel>
	)
});

Process.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Process;
