const docQuery = (query) => document.querySelector(query)
const docQueryAll = (query) => document.querySelectorAll(query)

// document-element document-element document-element document-element int
const sliderFunction = (sliderTrack, sliderItem, buttonLeft, buttonRight, position = 0) => {

    // проверяет находится ли пользователь в крайних позициях, если да, отключает кнопки
    const disabledCheck = () => {
        if(position >= 0) buttonLeft.disabled = 'disabled'
        else buttonLeft.disabled = ''
        
        if(`-${(sliderTrack.children.length-1)*sliderItem.offsetWidth}` >= position)
        buttonRight.disabled = 'disabled'
        else buttonRight.disabled = ''
    }

    // считывает нажатие кнопки
    buttonRight.addEventListener('click', () => {
        position -= sliderItem.offsetWidth
        disabledCheck()
    
        sliderTrack.style.transform = `translate(${position}px)`
    })

    // считывает нажатие кнопки
    buttonLeft.addEventListener('click', () => {
        position += sliderItem.offsetWidth
        disabledCheck() 
        
        sliderTrack.style.transform = `translate(${position}px)`
    })
    
    // проверка на инициализации функции
    disabledCheck()
}




// массив элементов страницы
const sliderList = docQueryAll('.slider-wrapper')

for(let S = 0; S < sliderList.length; S++) {

    const mainSlider = sliderList[S].children[1]
    const buttonLeft = sliderList[S].children[0]
    const buttonRight = sliderList[S].children[2]
    const sliderTrack = mainSlider.children[0]
    const sliderTrackItem = sliderTrack.children[0]

    sliderFunction(sliderTrack, sliderTrackItem, buttonLeft, buttonRight)

}