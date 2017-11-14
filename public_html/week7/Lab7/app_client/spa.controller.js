class Controller {

    constructor(model) {
        this.Model = model
    }

    home() {
        return this.Model.getEmployeeList()
    }
    
    add() { 
        this.Model.clearDataBindModel()
        return window.Promise.resolve()
    }
    
    update() {        
        return this.Model.updatePageLoad()
    }

}