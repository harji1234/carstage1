class Form{
    cunstructor() {

    }
    display() {
        var input=createInput();
        input.position(150,150) 
        var button=createButton("start")
        button.position(250,200)
        var greeting = createElement('h2')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount=playerCount+1
            player.update(name);
            player.updateCount(playerCount)
            greeting.html("hello"+name)
            greeting.position(130,150)
        })
    }
    
}