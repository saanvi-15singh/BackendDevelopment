const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");

function setStatus(text, type) {
    statusMessage.textContent = text;
    statusMessage.className = type || "";
}

// Build table rows with textContent (safe: values are treated as text, not HTML).
function displayStudents(students) {
    tableBody.replaceChildren();

    students.forEach(student => {
        const row = document.createElement("tr");

        [student.id, student.name, student.course].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// ---------------------------------------------------------------
// AJAX method 1: Fetch API (modern)
// ---------------------------------------------------------------
document.querySelector("#loadFetch").addEventListener("click", async () => {
    setStatus("Loading data with Fetch...");

    try {
        const response = await fetch("students.json");

        // fetch() does not fail automatically on HTTP 404/500.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        displayStudents(data.students);
        setStatus("Data loaded successfully using Fetch.", "success");
    } catch (error) {
        setStatus(`Error: ${error.message}`, "error");
    }
});

// ---------------------------------------------------------------
// AJAX method 2: XMLHttpRequest (the original AJAX object)
// ---------------------------------------------------------------
document.querySelector("#loadXhr").addEventListener("click", () => {
    setStatus("Loading data with XMLHttpRequest...");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "students.json", true);   // true = asynchronous

    // Runs when the request finishes (readyState 4).
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayStudents(data.students);
            setStatus("Data loaded successfully using XMLHttpRequest.", "success");
        } else {
            setStatus(`Error: HTTP ${xhr.status}`, "error");
        }
    };

    // Network failure.
    xhr.onerror = function () {
        setStatus("Error: network request failed.", "error");
    };

    xhr.send();
}); 

document.querySelector("#clearBtn").addEventListener("click", () => {
    tableBody.replaceChildren();
    setStatus("Table cleared.");
});
