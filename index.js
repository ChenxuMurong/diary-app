const handleClickOnGirl = () => {
    let randomColor = "rgb(" + String( Math.floor(256*Math.random()))+ "," 
    + String(Math.floor(256*Math.random()))+ ","+ String(Math.floor(256*Math.random())) + ")";

    number.style.color = randomColor;
    saved.style.color = randomColor;
    console.log(randomColor);
}

const decrementNumber = () => {
    let number = document.getElementById("number");
    number.textContent = String(Number(number.textContent) - 1)
}

const reset = () => {
    let number = document.getElementById("number");
    number.textContent = "42"
}

const incrementButton = document.getElementById("increment-button");

incrementButton.addEventListener("click", () => {
    let number = document.getElementById("number");
    let num = Number(number.innerHTML);
    number.innerHTML = String(num + 1);
} )

const saveNumButton = document.getElementById("save-button");

saveNumButton.addEventListener("click", () => {
    let numToSave = document.getElementById("number").innerText;
    let savEl = document.getElementById("saved");

    if(!saved.innerText){
        savEl.innerText += `${numToSave}`;
    }
    else{
        savEl.innerText += ` - ${numToSave}`;
        
    }
})