import { observable, action } from 'mobx';

class TodosModel {
    @observable
    state = {
        number: 0
    }
    @action
    up = () => {
        this.state.number += 1;
    }
    @action
    down = () => {
        this.state.number -= 1;
    }
}
const store = new TodosModel();
export default store;