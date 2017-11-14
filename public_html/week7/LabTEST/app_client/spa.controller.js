class Controller {

    constructor(model) {
        this.Model = model
    }

    home() {
        return Promise.resolve()
    }
    
    test() {
        this.Model.dataBindModel.isOn = false;
        return Promise.resolve();
    }

}