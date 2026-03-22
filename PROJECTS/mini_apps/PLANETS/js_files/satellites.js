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

//PREVIEW CONTAINERS

//VARIABLES
let previewContainer = document.querySelector('.satellites-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

//GETTING ALL THE "satellites container" AND "satellite" CLASSES FROM THE HTML FILE 
document.querySelectorAll('.satellites-container .satellite').forEach(satellite => {

    //WHEN THE SATELLITE IS CLICKED
    satellite.onclick = () =>{

        //CSS
        previewContainer.style.display = 'flex';

        //THE ATTRIBUTE "data-name" IS STORED IN THE VARIABLE NAME
        let name = satellite.getAttribute('data-name');

        //ALL THE "satellites-preview" CLASSES THAT ARE STORED IN THE "previewBox" VARIABLE ARE CHECKED
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');

            //WHEN THE CORRESPONDING TARGET DATA IS FOUND, THE CLASS "active" IS ADDED TO THE CLASS LIST
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

//CLOSING PREVIEW WINDOW 
previewBox.forEach(
    close =>{
        close.querySelector('.fa-times').onclick = () =>{
            close.classList.remove('active');
            previewContainer.style.display = 'none';
        };
    }
);
