let colorBtn = document.getElementById("colorChange")
const mainSect = document.getElementById("mainSection")
const textBtn = document.getElementById("addText")
const imgBtn = document.getElementById("imageBtn")

console.log(colorBtn)

const addImage = () => {
    const imgURL = "https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
    const imgElem = document.createElement("img")
    imgElem.src = imgURL
    imgElem.alt = "circle logo"

    mainSect.appendChild(imgElem)
}
    

const addSomeText = () => {
    const someText = "Text added!"
    const htmlElem = document.createElement("h1")
    htmlElem.innerText = someText

    mainSect.appendChild(htmlElem)
}

imgBtn.addEventListener("click", addImage)

textBtn.addEventListener("click", addSomeText)


colorBtn.addEventListener("pointerenter", () => {
    let red = Math.random()*255
    let blue = Math.random()*255
    let green = Math.random ()*255
    console.log(blue)

    mainSect.style.backgroundColor = "rgb(" + red + "," + green +", " + blue +")"
})
colorBtn.addEventListener("pointerleave", () => {
    let red = Math.random()*255
    let blue = Math.random()*255
    let green = Math.random ()*255
    console.log(blue)

    mainSect.style.backgroundColor = "rgb(" + red + "," + green +", " + blue +")"
})