# Assignment 1: Notes App

## 1. Objective

The objective of this assignment was to develop a Notes App using HTML, CSS, and JavaScript. The application allows users to add, display, and delete notes. Local Storage and JSON are used to save notes in the browser so that they remain available even after refreshing the page.

## 2. Technologies Used

* **HTML:** To create the structure of the application.
* **CSS:** To style the application and make it user-friendly.
* **JavaScript:** To implement the functionality of adding, displaying, and deleting notes.
* **Local Storage:** To store notes in the browser.
* **JSON:** To convert JavaScript data into a string for storage and retrieve it when needed.
* **Visual Studio Code and Live Server:** To write, run, and test the application.

## 3. Implementation

The project consists of three files: `index.html`, `style.css`, and `script.js`. The HTML file contains the title field, note text area, Add Note button, and notes section. CSS is used to improve the appearance of the application. JavaScript handles user input, displays notes, and provides the delete functionality. Local Storage and JSON ensure that saved notes remain available after refreshing the browser.

## 4. Problems Faced and Solutions

### Problem 1: Add Note Button Was Not Working

Initially, the Add Note button was not working correctly, and notes were not being added as expected.

**Solution:** I modified the code in `index.html`, `style.css`, and `script.js`. I checked the HTML element IDs and corrected the JavaScript event handling to ensure that clicking the button adds a note successfully.

### Problem 2: Success Message Was Not Displayed

After adding a note, a confirmation message was not displayed.

**Solution:** I added a message element in `index.html`, styled it in `style.css`, and implemented a JavaScript function in `script.js` to display the message "Note added successfully!" after a note is added.

### Problem 3: Running the Application Using Live Server

Initially, I faced difficulty running the project using the Live Server extension in VS Code.

**Solution:** I checked the extension and learned that I could also run the application by opening `index.html` directly in a web browser.

## 5. Testing

I tested the application by performing the following actions:

* Added notes with titles and content.
* Checked whether the success message appeared.
* Tested the Delete button.
* Refreshed the browser to verify that notes remained saved.
* Tried submitting empty fields to check input validation.

These tests helped verify the main functionality of the application.

## 6. Learning Outcomes

Through this assignment, I learned how to connect HTML, CSS, and JavaScript files, handle button events, manipulate webpage elements, and validate user input. I also understood how Local Storage and JSON can be used to save and retrieve data in a browser. Additionally, I improved my debugging and problem-solving skills.

## 7. Conclusion

I developed a Notes App that allows users to add, display, and delete notes. The application uses Local Storage and JSON to preserve notes after refreshing the browser. By fixing the issues with the Add Note button, adding success messages, and resolving difficulties with running the application, I gained practical experience in web development and debugging.
