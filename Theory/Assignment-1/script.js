const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const emptyMessage = document.getElementById("emptyMessage");
const message = document.getElementById("message");

// Load saved notes from Local Storage
let notes = [];

try {
    notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (!Array.isArray(notes)) {
        notes = [];
    }
} catch (error) {
    notes = [];
}

// Save notes using JSON
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Show a message
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 3000);
}

// Display all notes
function displayNotes() {
    notesContainer.innerHTML = "";

    if (notes.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    notes.forEach(function(note) {
        const card = document.createElement("div");
        card.className = "note-card";

        const title = document.createElement("h3");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            deleteNote(note.id);
        });

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(deleteBtn);

        notesContainer.appendChild(card);
    });
}

// Add a new note
function addNote() {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        showMessage(
            "Please enter both a title and note content.",
            "red"
        );
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title,
        content: content
    };

    notes.push(newNote);

    try {
        saveNotes();
    } catch (error) {
        notes = notes.filter(function(note) {
            return note.id !== newNote.id;
        });

        showMessage(
            "Unable to save the note. Please try again.",
            "red"
        );
        return;
    }

    displayNotes();

    noteTitle.value = "";
    noteContent.value = "";

    showMessage("Note added successfully!", "green");
}

// Delete a note
function deleteNote(id) {
    const previousNotes = notes;

    notes = notes.filter(function(note) {
        return note.id !== id;
    });

    try {
        saveNotes();
    } catch (error) {
        notes = previousNotes;

        showMessage(
            "Unable to delete the note. Please try again.",
            "red"
        );
        return;
    }

    displayNotes();

    showMessage("Note deleted successfully!", "green");
}

// Add button click event
addNoteBtn.addEventListener("click", addNote);

// Display saved notes when the page opens
displayNotes();

