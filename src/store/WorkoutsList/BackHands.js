import Workouts from "../Workouts"
import picture from '../../img/back.png'
import { BackHandsProgramm } from '../Exercises/ExercisesList'

class BackHands extends Workouts {
    name = 'Спина и руки'
    time = 10
    picture = picture
    id = 4
    title = 'Тренировка на спину и руки'
    calory = 185
    exercises = BackHandsProgramm

    constructor() {
        super()
    }


}

export default new BackHands()