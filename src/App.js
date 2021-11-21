import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Store, { StoreProvider } from './store/Store'

import Home from './panels/Home/Home';
import ExerciseDescription from './panels/ExerciseDescription/ExerciseDescription';
import Process from './panels/Process/Process';
import Calendar from './panels/Calendar/Calendar';


const AppStore = new Store()

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	// useEffect(() => {
	// 	bridge.subscribe(({ detail: { type, data }}) => {
	// 		if (type === 'VKWebAppUpdateConfig') {
	// 			const schemeAttribute = document.createAttribute('scheme');
	// 			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
	// 			document.body.attributes.setNamedItem(schemeAttribute);
	// 		}
	// 	});
	// 	async function fetchData() {
	// 		const user = await bridge.send('VKWebAppGetUserInfo');
	// 		setUser(user);
	// 		setPopout(null);
	// 	}
	// 	fetchData();
	// }, []);

	const go = idPanel => {
		setActivePanel(idPanel);
	};

	return (
		<StoreProvider store={AppStore}>
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel} popout={popout}>
						<Home id='home' go={go} />
						<ExerciseDescription id='excerciseDescription' go={go} />
						<Process id='process' go={go} />
						<Calendar id='calendar' go={go} />
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</StoreProvider>
	);
}

export default App;
