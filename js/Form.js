class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(560, 100)
        var input = createInput("")
        input.position(640, 200)
        var button = createButton("Play")
        button.position(700, 230)
        var greeting = createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            greeting.html("Hello "+ name)
            greeting.position(660, 250)
        })
    }
}