

export class Workouts {

    name = ''
    picture = ''
    time = 0
    id = 0
    title = ''
    calory = 0
    exerciseIndex = 0
    exercises = []

    constructor() {
    }

    get currentExercise() {
        return  this.exercises[this.exerciseIndex] 
    }

    next(){
        this.exerciseIndex += 1
    }

    get isFinish() {
        return this.exerciseIndex < this.exercises.length
    }

}


export default Workouts


