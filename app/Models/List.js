export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log("hello, from a list!")
        this.title = data.title
        this.item = data.item
    }
}