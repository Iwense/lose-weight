import React from 'react';
import PropTypes from 'prop-types';
import {ExpandTrainCard} from '../../components/ExpandTrainCard'
import {WorkoutList} from '../../components/WorkoutList'
import {StartButton} from '../../components/StartButton';
import {TimerButton} from '../../components/TimerButton';
import { observer } from 'mobx-react-lite';
import {useStore, STATES} from '../../store/Store'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import styles from './ExerciseDescription.module.css'

const ExerciseDescription = observer(({ id, go }) => {
	const store = useStore()
	const {currentWorkout, state} = store


	if (!currentWorkout) {
		return (
			<p className={styles.title}>Тренировки такой нет</p>
		)
	}

	return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={() => go('home')} />}
			>
				<p className={styles.title}>{currentWorkout?.name ?? 'Тренировка'}</p>
			</PanelHeader>
			<div className={styles.wrapper}>
				<div className={styles.main}>
					<ExpandTrainCard />
					{state === STATES.start && <WorkoutList />}
					{state === STATES.ready && <div>Реклама</div>}
				</div>
				<div className={styles.footer}>
					{state === STATES.start && <StartButton />}
					{state === STATES.ready && <TimerButton go={go}/>}
				</div>
				
			</div>
		</Panel>
	)
});

ExerciseDescription.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ExerciseDescription;
