const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const noteContainer = document.querySelector('.note-container');
const emptyText = document.getElementById('empty');
const closeBtn = document.getElementById('closeBtn');
const modal = document.querySelector(".modal-background-overlay");
const modalContainer = document.querySelector('.modal-background-container');

addBtn.addEventListener('click', addNote)

function addNote(e) {
    e.preventDefault();

    
    // Creating div for new note
    let newNote = document.createElement('div');
    newNote.className = "note";

    // Creating h1 for div
    let h1 = document.createElement('h1');
    h1.className = "noteH1";

    // Creating p for div
    let p = document.createElement('p');
    p.id = "noteP";
    p.innerHTML = input.value;
    
    // Creating view button for div
    let viewBtn = document.createElement('button')
    viewBtn.className = "viewBtn";
    viewBtn.innerText = "View Detail";
    
    // Appending h1, P and viewBtn to div
    newNote.appendChild(h1);
    newNote.appendChild(p);
    newNote.appendChild(viewBtn);
    
    // Append note to note contianer
    noteContainer.appendChild(newNote);
    
    let getTitles = document.querySelectorAll('.noteH1');
    let titlesArr = Array.from(getTitles);
    let counter = 0;
    for (i = 1; i <= titlesArr.length; i++) {
        counter++;
        h1.innerHTML = "Note " + counter;
    }
    
    if (input.value == "") {
        noteContainer.removeChild(newNote);
        alert("Please add a note ༼ つ ◕_◕ ༽つ");
    }
    
    if (e.target == addBtn) {
        input.value = '';
        if (noteContainer.contains(emptyText)) {
            noteContainer.removeChild(emptyText);
        }
    }

    let p2 = document.createElement('p');
    p2.className = 'p2';
    p2.innerHTML = p.innerHTML;
    
    viewBtn.addEventListener('click', function() {
        modal.classList.toggle("viewBtn");
        modalContainer.appendChild(p2);
    });
    
    closeBtn.addEventListener('click', function() {
        modal.classList.remove("viewBtn");
        if (p2.parentNode) {
            p2.parentNode.removeChild(p2);
        }
    })
}
