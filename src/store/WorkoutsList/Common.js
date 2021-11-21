import Workouts from "../Workouts"
import picture from '../../img/press.png'
import { CommonProgramm } from '../Exercises/ExercisesList'

class Common extends Workouts {
    name = 'Общая тренировка'
    time = 10
    picture = picture
    id = 3
    title = 'Общая тренировка'
    calory = 185
    exercises = CommonProgramm

    constructor() {
        super()
    }


}

export default new Common()