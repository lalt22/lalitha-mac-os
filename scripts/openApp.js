
function openAbout() {
    var aboutModal = document.getElementById("aboutModal")
    aboutModal.style.display = "block";
}

function openFinder() {
    console.log("Opening Finder");
    var finderModal = document.getElementById("finderModal");
    finderModal.style.display = "block";
}

function openNotes() {
    console.log("Opening Notes");
    var notesModal = document.getElementById("notesModal");
    notesModal.style.display = "block";

    let notes = document.querySelectorAll('.note');
        
    notes.forEach(function(note) {
        console.log("checking notes");
        note.addEventListener('click', function() {
            notes.forEach(function(note) {
                note.classList.remove('focused');
                note.classList.remove('selected');
            });
            this.classList.add('focused');
        });
    });
        
    window.addEventListener('click', function(e) {
        if(!e.target.classList.contains('item')) {                
            notes.forEach(function(note) {
                if(note.classList.contains('focused')) {
                    note.classList.remove('focused');
                    note.classList.add('selected');
                }
            });
        }
    }, true);
    
}

function openTerminal() {
    console.log("Opening Terminal");
    var terminalModal = document.getElementById("terminalModal");
    terminalModal.style.display = "block";
}

function openFaceTime() {
    console.log("Opening Facetime");
    var facetimeModal = document.getElementById("facetimeModal");
    facetimeModal.style.display = "block";
}

function openCalculator() {
    console.log("Opening Calculator");
    var calculatorModal = document.getElementById("calculatorModal");
    calculatorModal.style.display = "block";
}