//NAVIGATION BAR
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})


//FLASH CARDS
const boxes = document.querySelectorAll('.box')

//WHEN THE USER SCROLLS THE "checkBoxes" FUNCTION IS CALLED
window.addEventListener('scroll', checkBoxes)

checkBoxes()

//CHECKS IF THE TOP OR THE BOTTOM OF THE CARD IS AT THE TOP OR THE BOTTOM OF THE WINDOW 
function checkBoxes() {

    //FIGURING OUT THE TRIGGER POINT GETTING THE WINDOW HEIGHT AND / 5 * 4 TO GET A SLIGHTLY SMALLER VALUE
    const triggerBottom = window.innerHeight / 5 * 4

    //LOOPING THROUGH ALL THE CARDS
    boxes.forEach(box => {

        //GETTING THE TOP OF EACH CARD
        //"getBoundingClient" GIVES US INFORMATION ABOUT THE SIZE AND THE POISTION OF THE ELEMENT 
        //BY ADDING THE "".top" PROPERTY WE GET THE TOP OF THE CARD
        const boxTop = box.getBoundingClientRect().top

        //IF THE CARD IS WITHID THE DISPLAYED PART OF THE WINDOW, THE CLASS "show" IS ADDED
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {

            //ELSE IT IS REMOVED
             box.classList.remove('show')
        }

    })
}
