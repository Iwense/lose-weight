import Workouts from "../Workouts"
import picture from '../../img/plank.png'
import { PressProgramm } from '../Exercises/ExercisesList'

class Press extends Workouts {
    name = 'Пресс'
    time = 7
    picture = picture
    id = 1
    title = 'Тренировка на пресс'
    calory = 150
    exercises = PressProgramm

    constructor() {
        super()
    }


}

export default new Press()