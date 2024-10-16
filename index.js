// Counter app

let count = 0;
button = document.getElementById("increment-btn")
counter = document.getElementById("count-el")
entry = document.createElement("p")
entry.innerText = "previous entries: "
document.body.appendChild(entry)

function increment(){
    count++
    counter.innerText = count
    
}
function save(){
    entry.innerText = entry.innerText + count.toString() + "-"
}

