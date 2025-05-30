//all get elements

let inputimg = document.getElementById("main-img")
let imgcontainer = document.getElementById("edit-img")
let editImg = document.getElementById("img-main")
let imguploder = document.getElementById("img-uploder")
let openpnnelsetting = document.getElementById("pannel-setting-open")
let settinghandelere = document.getElementById("setting")
let mainsettingpannel = document.getElementById("setting-pannel") 

// Image upload events

inputimg.addEventListener("change", () => {
    let imgFile = inputimg.files[0]

    if (!imgFile) return

    let imgUrl = URL.createObjectURL(imgFile)

    editImg.src =imgUrl

    imguploder.style.display = "none"
    imgcontainer.style.display = "block"
})

// open setting pannel events

openpnnelsetting.addEventListener("click",()=>{
    settinghandelere.style.display = "block"
})

settinghandelere.addEventListener("click",()=>{
    settinghandelere.style.display = "none"
})

mainsettingpannel.addEventListener("click",(e)=>{
    e.stopPropagation()
})