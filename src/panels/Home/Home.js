import React from 'react';
import PropTypes from 'prop-types';
import {TrainCardList} from '../../components/TrainCardList'

import { Panel, PanelHeader, Header, Button, Group, Cell, Div } from '@vkontakte/vkui';
import styles from './Home.module.css'
import ActivityPane from '../../components/ActivityPane/ActivityPane';
import NewsPane from '../../components/NewsPane/NewsPane';


const Home = ({ id, go }) => {

	return (
		<Panel id={id}>
		<PanelHeader >
			<p className={styles.title}>Тренировки</p>
		</PanelHeader>

		<div className={styles.wrapper}>
			<h3 className={styles.mainTitle}>Недельная активность</h3>

			<ActivityPane go={go}/>
			<NewsPane />

			<h3 className={styles.mainTitle}>Выберите тренировку</h3>	
			<TrainCardList go={go}/>
			
		</div>
	</Panel>
	)
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
