let cuukie = document.getElementById("cuukie")
let counter = document.getElementById("counter")
let goal = document.getElementById("goal")
let goalText = document.getElementById("goal-text")
const clickSound = new Audio('click.mp3')

cuukie.addEventListener('click', function(e) {
    clickSound.currentTime = 0  // resets so rapid clicks work
    clickSound.play()
    counter.textContent++
    
    cuukie.style.transition = 'transform .01s ease'
    cuukie.style.transform = 'scale(1.1) rotate(0deg)'
    
    setTimeout(() => {
        cuukie.style.transform = 'scale(1)'
    }, 100)
    if (counter.textContent >= 300) {
        goalText.style.display = "none"
    } else if (counter.textContent >= 255) {
        goalText.textContent = "game's actually over, go away!"
    } else if (counter.textContent >= 251) {
        goalText.textContent = "dang it, you must've double clicked. sorry about that."
    } else if (counter.textContent == 250) {
        counter.textContent = 251
        goalText.textContent = "..."
    } else if (counter.textContent >= 150) {
        goalText.textContent = "okay fine, if you hit exactly '250', I'll give you a giftcard for 10$ uber eats."
    } else if (counter.textContent >= 125) {
        goalText.textContent = "there's no prizes or anything..."
    } else if (counter.textContent >= 105) {
        goalText.textContent = "were you expecting something at 100?"
    } else if (counter.textContent >= 75) {
        goalText.textContent = "well, I'm going to run some errands, brb."
    } else if (counter.textContent >= 50) {
        goalText.textContent = "game's over dude"
    } else if (counter.textContent >= 33) {
        goalText.textContent = "why are you still clicking?"
    } else if (counter.textContent >= Number(goal.textContent)) {
        goalText.textContent = "congrats!"
    }
})


document.querySelector("header").addEventListener("click", function() {
    location.reload()
})