import plank from '../../img/plank.png'
import press from '../../img/press.png'

export class Exercises {
   //Common functional
}



export class PlankExercise extends Exercises {
    name = 'Планка'
    second = 40
    picture = plank
    id = 1
    desc = 'Становититесь на локти в упор лежа'
    calory = 185

    constructor() {
        super();    
    }
}

export class JumpExercise extends Exercises {
    name = 'Прыжки'
    second = 20
    picture = press
    id = 2
    desc = 'Прыжки на двух ногах'
    calory = 20

    constructor() {
        super();    
    }
}

