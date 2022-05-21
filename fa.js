const locSelect = document.querySelector('.loc__select')
const selectCon = document.querySelector('.loc__select-content')
if(locSelect){
locSelect.addEventListener('click', function(){
    locSelect.classList.toggle('_active')
    selectCon.classList.toggle('_active')
})    
}

selectCon.onclick = function() {
        selectCon.classList.remove('_active')

}


let locItemOne = document.querySelector('.loc__content-item1')
let locItemTwo = document.querySelector('.loc__content-item2')
let locItemThree = document.querySelector('.loc__content-item3')

locItemOne.onclick = function() {
    locSelect.innerText = locItemOne.text
}
locItemTwo.onclick = function() {
    locSelect.innerText = locItemTwo.text
}
locItemThree.onclick = function() {
    locSelect.innerText = locItemThree.text
}