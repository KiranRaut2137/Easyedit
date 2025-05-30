
let inputimg = document.getElementById("main-img")

let imgcontainer = document.getElementById("edit-img")

let editImg = document.getElementById("img-main")

let imguploder = document.getElementById("img-uploder")

inputimg.addEventListener("change", () => {
    let imgFile = inputimg.files[0]

    if (!imgFile) return

    let imgUrl = URL.createObjectURL(imgFile)

    editImg.src =imgUrl

    imguploder.style.display = "none"
    imgcontainer.style.display = "block"
})