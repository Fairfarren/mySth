import { observable, action } from 'mobx';



class TodosModel {
    @observable
    user = {
        name: 'lyk',
        token: ''
    }
    @action
    up = () => {
        console.log(this.user.age);
        this.user.age+=1;
    }
}
const store = new TodosModel();
export default store;