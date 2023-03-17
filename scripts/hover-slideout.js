const doccQueryAll = (string) => document.querySelectorAll(string)

const slideoutWrapper = doccQueryAll('.hover-slideout-item')
// const slideoutItem = doccQuery('.hover-slideout-item__slideout')

const slideOutFunction = (slideoutWrapper, slideoutItem) => {
    slideoutWrapper.addEventListener('mouseover', () => {
        // slideoutItem.style.background = 'green'
        slideoutItem.style.animationName = `hover-slideout-item-mouseover`
      
    })
    
    
    slideoutWrapper.addEventListener('mouseout', () => {
        slideoutItem.style.animationName = `hover-slideout-item-mouseout`
    })
}


for(let SLIDEOUT = 0; SLIDEOUT < slideoutWrapper.length; SLIDEOUT++) {
    
    slideOutFunction(slideoutWrapper[SLIDEOUT], slideoutWrapper[SLIDEOUT].children[1])
}