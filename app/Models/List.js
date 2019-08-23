export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log("hello, from a list!")
        this.title = data.title
        this.item = data.item
    }

    drawItems(listIndex) {
        let itemTemplate = ""
        this.item.forEach((i, itemIndex) => {
            itemTemplate += `<li>${i}<span onclick="app.controllers.listcontroller.deleteItem(${listIndex}, ${itemIndex})">x</span></li>`
        });
        return itemTemplate
    }

    getTemplate(index) {
        let template =
            `
            <div class="col-3">
                <h1>${this.title}</h1>
                <ul>
                    template += this.drawItems(index)
                    template +=
                </ul>
                <form onsubmit="app.controllers.listController.addItem(event, ${index})">
                    <div class="form-group">
                        <label for="item">Item</label>
                        <input type="text" class="form-control" name="Item" placeholder="input item" required>
                    </div>
                    <button type="submit">+</button>
                </form>
                <button type="button" onclick="app.controllers.listController.deleteList($index})>x</button>
            </div>
        `
        return template
    }
}