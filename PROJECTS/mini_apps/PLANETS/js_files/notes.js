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

//NOTES 
const addBtn = document.getElementById('add')

//FETCHING THE LAST SAVED NOTES SO WHEN THE USER RELOADS THE PAGE, THE PREVIOUS SAVED NOTES ARE DISPLAYED
const notes = JSON.parse(localStorage.getItem('notes'))

// IF THERE ARE NOTES, THEN NEW NOTE IS CALLED AND DISPLAYS THE LAST SAVED NOTES
if(notes){
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote(''))

//ADD NEW NOTE BUTTON FUNCTION
function addNewNote(text = '') {

    //CREATING A DIV WITH THE CLASS "note"
    const note = document.createElement('div')
    note.classList.add('note')

    //NOTE WINDOW PATTERN 
    //IF "text" THEN HAVE NO CLASS, ELSE HAVE THE CLASS "hidden" WHICH HAS DISPLAY NONE
    //IF THERE IS "text" THEN HAVE THE CLASS "hidden", ELSE HAVE NO CLASS / IF THERE IS TEXT THEN WE WANT TO HIDE THE TEXT AREA
    note.innerHTML = `
     <div class="tools">
       <button class="edit"><i class="fas fa-edit"></i></button>
       <button class="delete"><i class="fas fa-trash-alt"></i></button>
     </div>

     <div class="main ${text ? "" : "hidden"}"></div>
     <textarea class="${text ? "hidden" : ""}"></textarea>`
    

     //CONSTANTS FOR BUTTONS' FUNCTIONS
     const editBtn = note.querySelector('.edit')
     const deleteBtn = note.querySelector('.delete')
     const main = note.querySelector('.main')
     const textArea = note.querySelector('textarea')
    
     //SAVING THE INPUT TEXT
     textArea.value = text
     main.innerHTML = text

     //DELETING THE NOTE BUTTON FUNCTIONT 
     deleteBtn.addEventListener('click', () => {
        note.remove()

        //IF A NOTE IS DELETED, IT WILL NOT BE DISPLAYED WHEN THE USER RELOADS THE PAGE
        updateLS()
     })

     //EDIT NOTE BUTTON FUNCTION
     editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
     })

     //KEEPS THE LAST NOTES INPUT SAVED AFTER CLICKING THE EDIT BUTTON
     textArea.addEventListener('input', (e) => {

        //e.target.value
        const {value} = e.target

        //UPDATING THE innerHTML with "value"
        main.innerHTML = value

        //UPDATING LOCAL STORAGE
        updateLS()
     })

    //ADDING THE "note" TO THE BODY
    document.body.appendChild(note)
}

//UPDATE LOCAL STORAGE FUNCTION
function updateLS(){
    const notesText = document.querySelectorAll('textarea')

    //CREATING AN EMPTY ARRAY
    const notes = []

    //LOOPING THROUGH EACH NOTE AND ADDING THE "value" AT THE END OF THE "notes" ARRAY
    notesText.forEach(note => notes.push(note.value))

    //SAVIING IN THE LOCAL STORAGE THE ITEM "notes" WHICH IS TURNED INTO A STRING
    localStorage.setItem('notes', JSON.stringify(notes))
}