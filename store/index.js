import { action, observable } from 'mobx'

import List from './list'
let store = null

class Store {


    constructor(isServer, obj = 10) {
        if (obj) {
            this.a = obj
        }
        this.list = new List()
    }

    @observable a = 12




    @action change = (newValue) => {
        this.a = newValue
    }

}


export function initialStore(isServer, p2) {
    if (isServer) {
        return new Store(isServer, p2)
    } else {
        if (store === null) {
            store = new Store(isServer, p2)
        }
        return store
    }
}