import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    deleteItem(listIndex, itemIndex) {
        let keepItem = confirm("Are you sure?")
        if (keepItem == true) {
            _state.lists[listIndex].item.splice(itemIndex, 1)
            this.saveLists()
            return true;
        } else {
            return false;
        }
    }
    deleteList(index) {
        let keepList = confirm("Are you sure?")
        if (keepList == true) {
            _state.lists.splice(index, 1)
            this.saveLists()
            return true;
        } else {
            return false;
        }
    }
    addItem(newItem, listIndex) {
        _state.lists[listIndex].item.push(newItem)
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.lists)
    }
    constructor() {
        console.log("hello, from list service!")
        this.loadLists()
    }
    get List() {
        return _state.lists.map(list => new List(list))
    }

    loadLists() {
        let savedLists = JSON.parse(localStorage.getItem("lists"))
        if (savedLists) {
            _state.lists = savedLists
        }
    }
    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
