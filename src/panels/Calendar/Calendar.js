import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import {useStore} from '../../store/Store'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import styles from './Calendar.module.css'

const Calendar = observer(({ id, go }) => {
	const store = useStore()

	return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={() => go('home')} />}
			>
				<p className={styles.title}>{'Календарь'}</p>
			</PanelHeader>
			<div className={styles.wrapper}>
				Тут Календарь
			</div>
		</Panel>
	)
});

Calendar.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Calendar;
