
import Ass from './Ass'
import Press from './Press'
import Common from './Common'
import BackHands from './BackHands'

class WorkoutsList {

    get getAll() {
        return [Press, Ass, Common, BackHands]
    }

}

export default new WorkoutsList()