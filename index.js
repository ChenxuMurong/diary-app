
const handleClickOnGirl = () => {
    let randomColor = "rgb(" + String( Math.floor(256*Math.random()))+ "," 
    + String(Math.floor(256*Math.random()))+ ","+ String(Math.floor(256*Math.random())) + ")";

    number.style.color = randomColor;
    saved.style.color = randomColor;
    console.log( randomColor);
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