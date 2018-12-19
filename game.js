let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let player = document.querySelector("#player-box")
let computer = document.querySelector("#computer-box")
let all = document.querySelectorAll("#rock", "#paper", "#scissors") 
let options = ["<h1>Rock</h1>", "<h1>Paper</h1>", "<h1>Scissors</h1>"]
let randomOposition = Math.floor(Math.random() * options.length)
let reset = document.querySelector("#reset")


rock.addEventListener('click', (event)=> {
    handleCLick("rock")
    player.innerHTML = "<h1>Rock</h1>"
    
})

paper.addEventListener('click', (event)=> {
    handleCLick("paper")
    player.innerHTML = "<h1>Paper</h1>"
})

scissors.addEventListener('click', (event)=> {
    handleCLick("scissors")
    player.innerHTML = "<h1>Scissors</h1>"
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