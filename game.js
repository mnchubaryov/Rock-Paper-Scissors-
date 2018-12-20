let rock = document.querySelector("#rock") 
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let player= document.querySelector("#player-box")
let computer = document.querySelector("#computer-box")
let all = document.querySelectorAll("#rock", "#paper", "#scissors") 
let options = ["<h1>Rock</h1>", "<h1>Paper</h1>", "<h1>Scissors</h1>"]
let randomOposition = Math.floor(Math.random() * options.length)
let reset = document.querySelector("#reset")
let human = document.querySelector("#player")
let technology = document.querySelector("#computer")

rock.addEventListener('click', (event)=> {
    handleCLick("rock")
    player.innerHTML = "<h1>Rock</h1>"
    resultRock()
})

paper.addEventListener('click', (event)=> {
    handleCLick("paper")
    player.innerHTML = "<h1>Paper</h1>"
    resultPaper()
})

scissors.addEventListener('click', (event)=> {
    handleCLick("scissors")
    player.innerHTML = "<h1>Scissors</h1>"
    resultScissors()
})

function handleCLick(choice) {
    console.log("handling click, you clicked ", choice)
    computer.innerHTML = options[Math.floor(Math.random() * options.length)] 
}

reset.addEventListener('click', (event) => {
    player.innerHTML = "<h1>Player</h1>"
    computer.innerHTML = "<h1>Computer</h1>"
})


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
            player.innerHTML = "<h1>Player</h1>"
            computer.innerHTML = "<h1>Computer</h1>"
    }
}

function win() {
 human.innerHTML = "<h1>winner</h1>"
 technology.innerHTML = "<h1>loser</h1>"
}
 
function lose() {
 human.innerHTML = "<h1>lose</h1>"
 technology.innerHTML = "<h1>winner</h1>"
} 

function tie() {
 human.innerHTML = "<h1>tie</h1>"
 technology.innerHTML = "<h1>tie</h1>"
}

function resultRock() {
    if((computer.innerHTML == "<h1>Scissors</h1>")) {
        win()
    }
    if((computer.innerHTML == "<h1>Paper</h1>")) {
        lose()
    }
    if((computer.innerHTML == "<h1>Rock</h1>")) {
        tie()
    }
}

function resultPaper() {
    if((computer.innerHTML == "<h1>Scissors</h1>")) {
        lose()
    }
    if((computer.innerHTML == "<h1>Paper</h1>")) {
        tie()
    }
    if((computer.innerHTML == "<h1>Rock</h1>")) {
        win()
    }
}

function resultScissors () {
    if((computer.innerHTML == "<h1>Scissors</h1>")) {
        tie()
    }
    if((computer.innerHTML == "<h1>Paper</h1>")) {
        win()
    }
    if((computer.innerHTML == "<h1>Rock</h1>")) {
        lose()
    }
}