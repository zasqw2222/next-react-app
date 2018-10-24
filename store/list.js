import { action, observable } from 'mobx'


class List {

    constructor() {

    }
    @observable list = [1, 2]

    @action addList = (list) => {
        this.list.push(list)
    }
}

export default List