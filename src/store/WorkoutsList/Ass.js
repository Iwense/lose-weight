import Workouts from "../Workouts"
import { AssProgramm } from '../Exercises/ExercisesList'

import picture from '../../img/ass.png'

class Ass extends Workouts {
    name = 'Ягодицы и ноги'
    time = 20
    picture = picture
    id = 2
    title = 'Тренировка на ягодицы и ноги'
    calory = 185
    exercises = AssProgramm

    constructor() {
        super()
    }

}

export default new Ass()