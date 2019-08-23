import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ""
    let lists = _listService.List
    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    })
    document.querySelector('#list').innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        console.log("hello, from list controller!")
        _drawLists()
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }
    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.title.value
        }
        _listService.addList(newList)
        _drawLists()
    }
    addItem(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newItem = {
            item: form.item.value
        }
        _listService.addItem(newItem, listIndex)
        _drawLists()
    }
    deleteList(index) {
        _listService.deleteList(index)
        _drawLists()
    }
    deleteItem(listIndex, itemIndex) {
        _listService.deleteItem(listIndex, itemIndex)
        _drawLists
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
}