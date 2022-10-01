        let colorBtn = document.getElementById("colorChange")
        const mainSect = document.getElementById("mainSection")
        const imgBtn1 = document.getElementById("imageBtn1")
        const imgBtn2 = document.getElementById("imageBtn2")
        const imgBtn3 = document.getElementById("imageBtn3")

        const addImage1 = () => {
            const imgURL = "https://i.ibb.co/qd4K03R/Michael-Jordan-UNC-Deadfellaz.png"
            const imgElem = document.createElement("img")
            imgElem.src = imgURL
            imgElem.alt = "Image 1"

            mainSect.appendChild(imgElem)
        }
        const addImage2 = () => {
            const imgURL = "https://i.ibb.co/B48LpJT/Michael-Jordan-Jam-Deadfellaz.png"
            const imgElem = document.createElement("img")
            imgElem.src = imgURL
            imgElem.alt = "Image 2"

            mainSect.appendChild(imgElem)
        }
        const addImage3 = () => {
            const imgURL = "https://i.ibb.co/vs1W5dW/Michael-Jordan-Crying-Deadfellaz.png"
            const imgElem = document.createElement("img")
            imgElem.src = imgURL
            imgElem.alt = "Image 3"

            mainSect.appendChild(imgElem)
        }

        imgBtn1.addEventListener("click", addImage1)
        imgBtn2.addEventListener("click", addImage2)
        imgBtn3.addEventListener("click", addImage3)