class View {

    get home() {
        return Promise.resolve(`<h1>Home page</h1>`)
    }
    
    get test() {
        return Promise.resolve(`<h1>Test Page</h1>
        
                <p data-bind-class="{'on': '', 'off': ''}">Test text</p>
                <button></button>
        `)
    }
    
}