let increment = document.querySelector("#increment")
let save = document.querySelector("#save")
let counter = document.querySelector("#counter")
let prev = document.querySelector("#prev")

alert("Welcome to my counter app")

let count = 0

// increment.addEventListener('click', function() {
//     count += 1
//     counter.textContent = count
// })

function incrementButton() {
    if (increment) {
        increment.addEventListener('click', () => {
            count += 1
            counter.textContent = count
        })
    }
}

function saveButton() {
    if(save) {
        save.addEventListener('click', () => {
            prev.textContent += count + " - " 
            count = 0
            counter.textContent = count
        })
    }
}

incrementButton();
saveButton();

// save.addEventListener('click', function() {
//     prev.textContent += count + " - "
//     count = 0
//     counter.textContent = count
// })
