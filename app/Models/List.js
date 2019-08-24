export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        console.log("hello, from a list!")
        this.title = data.title || []
        this.item = data.item || []
    }

    getTemplate(index) {
        let template =
            `
            <div class="col-3 list-border">
                <h1>${this.title}</h1>
                <ol>`
        template += this.drawItems(index)
        template += `
                </ol>
                <form onsubmit="app.controllers.listController.addItem(event, ${index})">
                    <div class="form-group">
                        <label for="item"></label>
                        <input type="text" class="form-control" name="item" placeholder="input item" required>
                    </div>
                    <button class="btn button-one" type="submit">add</button>
                </form>
                <button class="btn button-one" type="submit" onclick="app.controllers.listController.deleteList(event, ${index})">x</button>
                </div>
        `
        return template
    }
    drawItems(listIndex) {
        let itemTemplate = ""
        this.item.forEach((i, itemIndex) => {
            itemTemplate += `<li>${i}<button class="btn button-one" type="submit" onclick="app.controllers.listController.deleteItem(${listIndex}, ${itemIndex})">x</button></li>`
        });
        return itemTemplate
    }
}