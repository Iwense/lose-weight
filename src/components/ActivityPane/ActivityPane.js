import React from 'react';
import calendar from '../../img/img-calendar.svg'
import girl from '../../img/img-girl.svg'
import { Button  } from '@vkontakte/vkui';
import ProgressBar from '../ProgressBar/ProgressBar';
import { observer } from 'mobx-react-lite';
import {useStore} from '../../store/Store'

import styles from './ActivityPane.module.css'

const ActivityPane = observer(({go}) => {
    const store = useStore();

    return (
        <div className={styles.root} onClick={() => go('calendar')}>
           
            <div className={styles.right}>
                <img className={styles.calendar} src={calendar} alt='Календарь'/>
                <img className={styles.girl} src={girl} alt='Девочка'/>
                <Button className={styles.btn}>
                    <p className={styles.btnText}>
                        {`${store.currentDay}-й день`}
                    </p>
                </Button>
            </div>
            
            <div className={styles.left}>
                {store.currentDay === 1 ? (
                    <h2 className={styles.text}>Начните заниматься уже <strong>сегодня!</strong></h2>
                ) : (
                    <h2 className={styles.text}>Продолжайте в том же <strong>духе!</strong></h2>
                )}

                <div className={styles.bar}>
                    <ProgressBar completed={store.procentLeft} />
                    <p className={styles.leftText}>{`осталось ${store.daysLeft} дней`}</p>
                </div>
                
            </div>
           
        </div>
        
    );
})

export default ActivityPane;