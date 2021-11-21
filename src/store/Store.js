import React from 'react'
import {  makeAutoObservable} from 'mobx'

const WORKOUT_DAYS = 31

export const STATES = {
  start: 'start',
  ready: 'ready',
  tick: 'tick',
  next: 'next',
  pause: 'pause',
  finish: 'finish',
}

class Store {

    currentWorkout = null
    currentDay = 1
    state = STATES.start
    

    constructor() {
        makeAutoObservable(this)
    }

    setState(state){
      this.state = state
    }

    get daysLeft() {
        return WORKOUT_DAYS - this.currentDay
    }

    get procentLeft() {
        return 100 / (WORKOUT_DAYS - 1) * this.currentDay
    }

    setCurrentWorkout(workout){
        this.currentWorkout = workout
    }

}


export default Store

/* Store helpers */
const StoreContext = React.createContext();
 
export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
 
/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);
 
/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};