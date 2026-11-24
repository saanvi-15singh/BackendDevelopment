# jQuery

## Programs to Familiarize with jQuery (2 Programs)

**Lab Experiment 10 Report**

## 1. Introduction and Objective

jQuery is a small and fast JavaScript library. It provides simple methods for selecting HTML elements, modifying webpage content, handling events, applying CSS and creating animations. Tasks that require multiple lines of JavaScript can often be performed using a single line of jQuery.

This experiment demonstrates jQuery through two programs: a collection of basic jQuery demonstrations and a Task Manager application that combines different jQuery features.

**Objectives:**

- Select elements using jQuery selectors and modify their text, HTML, CSS, classes and attributes.
- Demonstrate effects and animations such as hide, show, fade, slide and `animate()`.
- Add, remove and clone HTML elements.
- Handle mouse, keyboard and form events, including event delegation.
- Navigate through the DOM using parent, children, siblings and other traversal methods.
- Build a functional application with validation, filtering and searching using jQuery.

## 2. Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Defines elements that jQuery selects and modifies |
| Styling | CSS3 | Provides layout, highlighting, badges and progress bars |
| Library | jQuery 3.7.1 (CDN) | Handles selectors, effects, events and DOM manipulation |
| Logic | JavaScript (ES5/ES6) | Implements program logic and task management |
| Tools | VS Code, Chrome / Edge DevTools | Writing, running and inspecting the webpages |

## 3. How to Run

1. Keep all the files inside a folder named `exp10-jquery`.
2. Open `program1.html` in Chrome or Edge by double-clicking it or using the Live Server extension in VS Code.
3. Use the navigation links in the header to switch between `program1.html` and `program2.html`.
4. Ensure that an active internet connection is available because jQuery is loaded through the CDN.
5. Program 1 displays the results in green output boxes below the respective buttons.

No additional installation or server configuration is required.

## 4. Project Structure

```text
exp10-jquery/
├── program1.html     # Program 1 page (eight demonstrations)
├── program1.js       # Program 1 jQuery code
├── program2.html     # Program 2 page (Task Manager)
├── program2.js       # Program 2 jQuery code
├── style.css         # Styling for both pages
└── REPORT.md         # Experiment report
```

## 5. Programs

### 5.1 Program 1: jQuery Basics

**Aim:** To demonstrate the main groups of jQuery methods on a single webpage.

The code is written inside `$(document).ready(function () { ... });`, which ensures that the jQuery code executes after the webpage has loaded.

#### Part A: Selectors

jQuery selectors are used to select specific HTML elements based on their ID, class, tag name or position.

| Selector | Description |
|---|---|
| `$("li.fruit")` | Selects all `li` elements having the class `fruit` |
| `$(".special")` | Selects elements having the class `special` |
| `$("#fruitList li:first")` | Selects the first list item |
| `$("#fruitList li:odd")` | Selects items at index 1, 3, 5 and so on |
| `$("#fruitList li:last-child")` | Selects the last child element |

**Code:**

```javascript
$("#selClass").click(function () {
    $("#fruitList li").removeClass("picked");
    $(".special").addClass("picked");
});
```

**Expected Result:** Each button highlights the selected elements in green. The output log displays the number and names of the selected elements.

For example:

`1 element(s) selected: [Mango]`

**Output:** (Insert screenshot)

#### Part B: Effects and Animation

jQuery provides different effects and animation methods to make webpages interactive.

| Method | Description |
|---|---|
| `hide()` / `show()` / `toggle()` | Hides, displays or switches the visibility of an element |
| `fadeOut()` / `fadeIn()` / `fadeTo()` | Fades an element out, in or to a specified opacity |
| `slideUp()` / `slideDown()` / `slideToggle()` | Slides an element up or down |
| `animate({ left: "250px" }, 1000)` | Gradually changes numeric CSS properties |
| `stop()` | Stops the currently running animation |

**Code:**

```javascript
$("#ball")
    .animate({ left: "250px" }, 700)
    .animate({ top: "30px" }, 400)
    .animate({ left: "0px" }, 700)
    .animate({ top: "0px" }, 400);
```

**Expected Result:** The selected box hides, fades and slides when the respective buttons are clicked. The red ball moves and grows. The animation chain moves the ball right, down, left and up sequentially.

**Output:** (Insert screenshot)

#### Part C: Content, CSS and Attributes

jQuery provides methods to access and modify the content, styling and attributes of HTML elements.

| Method | Description |
|---|---|
| `text()` | Gets or sets plain text |
| `html()` | Gets or sets HTML content inside an element |
| `val()` | Gets or sets the value of a form field |
| `css({ color: "red" })` | Changes CSS properties |
| `addClass()` / `removeClass()` / `toggleClass()` | Adds, removes or switches CSS classes |
| `attr("title", "...")` | Gets or sets an HTML attribute |

**Expected Result:**

- `text()` returns `This is some text inside a paragraph.`
- `html()` returns the same content with `<b>some</b>` formatting.
- `val()` returns `Hello jQuery`.
- The Set buttons modify the paragraph content and appearance.

**Output:** (Insert screenshot)

#### Part D: Adding and Removing Elements

jQuery provides methods to dynamically add, remove and modify HTML elements.

| Method | Description |
|---|---|
| `append()` | Adds content at the end of an element |
| `prepend()` | Adds content at the beginning of an element |
| `after()` | Inserts content after the selected element |
| `remove()` | Removes the selected element |
| `empty()` | Removes all child elements |
| `clone()` | Creates a copy of the selected element |

**Expected Result:** Starting with two list items, the buttons modify the list to contain 3, 4, 5, 4 and 5 items, respectively, before the `empty()` operation removes all items.

Clicking a list item toggles its green highlighting. This also works for newly added elements because the click event is attached to the parent list using `on()`.

**Output:** (Insert screenshot)

#### Part E: Events

jQuery events allow webpages to respond to different user interactions.

| Event | Description |
|---|---|
| `click()` | Executes when an element is clicked |
| `dblclick()` | Executes when an element is double-clicked |
| `mouseenter()` | Executes when the mouse pointer enters an element |
| `mouseleave()` | Executes when the mouse pointer leaves an element |
| `mousemove()` | Executes when the mouse pointer moves |
| `keyup()` | Executes when a keyboard key is released |
| `change()` | Executes when the value of a form element changes |

**Expected Result:**

- The output log displays the latest event.
- Typing `jquery` in the text box displays `6 characters`.
- Selecting a colour changes the webpage background.
- Mouse interactions display the corresponding events and pointer coordinates.

**Output:** (Insert screenshot)

#### Part F: DOM Traversing and Method Chaining

DOM traversal allows us to navigate between related HTML elements.

| Method | Description |
|---|---|
| `parent()` | Selects the parent element |
| `children()` | Selects the child elements |
| `siblings()` | Selects other elements at the same level |
| `next()` | Selects the next sibling |
| `prev()` | Selects the previous sibling |
| `nextAll()` | Selects all following siblings |
| `eq(0)` | Selects the element at the specified index |
| `each()` | Executes a function for every selected element |

**Code:**

```javascript
$("#chainBox")
    .css("background", "#ffe08a")
    .slideUp(500)
    .slideDown(500)
    .text("Chain finished!");
```

**Expected Result:** For the middle list item, `siblings()` selects 3 elements, `next()` selects 1 element and `nextAll()` selects 2 elements.

The method chaining button changes the background colour, slides the box up and down, and finally changes its text.

**Output:** (Insert screenshot)

### 5.2 Program 2: Task Manager

**Aim:** To develop a small Task Manager application using jQuery for form validation, event handling, filtering, searching and animations.

The tasks are stored in a JavaScript array, and a `render()` function dynamically displays the task list on the webpage.

#### Features and jQuery Methods

| Feature | jQuery Methods Used |
|---|---|
| Add task with validation | `submit()`, `e.preventDefault()`, `$.trim()`, `val()`, `fadeIn()` |
| Complete a task | `change()`, `closest("li")`, `data("id")` |
| Delete a task | `slideUp()` with a callback |
| Filter tasks | `data("filter")`, `addClass()` |
| Search tasks | `keyup()`, `val()` |
| Statistics and progress bar | `$.grep()`, `text()`, `animate()` |
| Clear completed tasks | `$.grep()` |
| Accordion | `slideToggle()`, `next()`, `siblings()` |
| Tabs | `hide()`, `fadeIn()`, `data("tab")` |
| Character and word counter | `keyup()`, `$.trim()`, `split()` |

#### Task Validation Rules

The application validates user input before adding a new task.

| Rule | Error Message |
|---|---|
| Title contains fewer than 3 characters | Title must have at least 3 characters. |
| No priority is selected | Please choose a priority. |
| A task with the same title already exists | This task already exists. |

#### Code: Adding a Task with Validation

```javascript
$("#taskForm").submit(function (e) {
    e.preventDefault();

    var title = $.trim($("#taskTitle").val());

    if (title.length < 3) {
        $("#formError")
            .text("Title must have at least 3 characters.")
            .hide()
            .fadeIn(200);
        return;
    }

    tasks.push({
        id: nextId++,
        title: title,
        priority: priority,
        done: false
    });

    render();
});
```

The form submission is prevented from reloading the webpage. The task title is checked before adding it to the task array.

#### Event Delegation

Since task items are created dynamically, their events are attached to the parent list using event delegation.

```javascript
$("#taskList").on("click", ".del", function () {
    // Delete task operation
});
```

This allows dynamically added task items to respond to user interactions.

User-entered text is displayed using `.text()` instead of `.html()`. Therefore, HTML tags entered as task titles are displayed as plain text rather than being interpreted as HTML.

#### Expected Result

- The application initially displays 3 tasks: 1 completed and 2 pending.
- A valid task is added with an animation, and the task statistics are updated.
- Invalid input displays a red error message and a red border.
- Completing a task applies a strikethrough effect and updates the progress bar.
- Filters display all, pending or completed tasks.
- Search displays tasks matching the entered keyword.
- The accordion and tabs work interactively.
- The character and word counter updates according to the entered text.

**Output:** (Insert screenshots of the task list, validation error and filtering functionality)

## 6. jQuery and Plain JavaScript Comparison

jQuery simplifies many common JavaScript operations by providing shorter methods and easy-to-use syntax.

| Task | Plain JavaScript | jQuery |
|---|---|---|
| Select by ID | `document.getElementById("a")` | `$("#a")` |
| Select by class | `document.querySelectorAll(".x")` | `$(".x")` |
| Change text | `el.textContent = "Hi"` | `$("#a").text("Hi")` |
| Hide an element | `el.style.display = "none"` | `$("#a").hide()` |
| Add a class | `el.classList.add("on")` | `$("#a").addClass("on")` |
| Click event | `el.addEventListener("click", f)` | `$("#a").click(f)` |
| Loop through elements | `for (...)` | `$("li").each(f)` |

## 7. Problems Faced and Solutions

During the implementation of the programs, different issues can occur while working with jQuery.

| Problem | Possible Cause | Solution |
|---|---|---|
| `$ is not defined` in the Console | jQuery did not load or the script was placed after the custom JavaScript | Check the internet connection and load jQuery before the custom script |
| `$("#id")` does not find an element | Code executes before the element is available | Use `$(document).ready(function () { ... })` |
| Clicking a newly added item does nothing | Event handler is attached only to existing elements | Use event delegation with `.on()` |
| Form submission reloads the page | Default form submission behaviour | Use `e.preventDefault()` |
| A deleted task appears again after rendering | Task was removed from the webpage but not from the array | Remove it from the array and call `render()` |
| Animations execute sequentially instead of simultaneously | Chained animations are placed in an animation queue | Use a single `animate()` method with multiple properties for simultaneous animation |
| User-entered HTML tags appear as formatting | `.html()` is used with user input | Use `.text()` to display user input safely |

*Note: Keep only the problems that you actually encountered during the experiment.*

## 8. Testing

Both programs were tested by interacting with their controls and checking the expected outputs.

A total of 38 automated checks were reported as passed during testing.

| Test | Expected Result | Status |
|---|---|---|
| Program 1: `$(".special")`, `$("li")`, `:odd` | Selects 1, 5 and 2 elements | Passed |
| Program 1: `text()`, `html()`, `val()` | Returns the expected text, HTML and input value | Passed |
| Program 1: Set HTML, toggle class and `attr()` | Bold text appears, class is added and title is updated | Passed |
| Program 1: append, prepend, after, remove, clone and empty | List contains 3, 4, 5, 4, 5 and finally 0 items | Passed |
| Program 1: Click and double-click event box | Logs click event and toggles colour on double-click | Passed |
| Program 1: Type `jquery` in the key box | Displays 6 characters | Passed |
| Program 1: Select a colour | Changes the background and logs the change event | Passed |
| Program 1: `next()`, `siblings()`, `nextAll()` and `each()` | Selects 1, 3 and 2 elements and lists each item | Passed |
| Program 2: Open the application | Displays 3 tasks: 1 completed and 2 pending | Passed |
| Program 2: Add a 2-character title | Displays minimum 3-character validation error | Passed |
| Program 2: Add a task without priority | Displays priority validation error | Passed |
| Program 2: Add `push code to github` with different letter casing | Rejects the duplicate task | Passed |
| Program 2: Add `Write report` with High priority | Adds the task and updates total to 4 | Passed |
| Program 2: Complete the new task | Displays 2 completed and 2 pending tasks | Passed |
| Program 2: Filter Completed and Pending | Displays 2 tasks in each category | Passed |
| Program 2: Search `report` and then `zzz` | Displays 1 matching task and then the no-tasks message | Passed |
| Program 2: Clear completed tasks | Leaves 2 pending tasks and 0 completed tasks | Passed |
| Program 2: Add `<b>x</b> bold` as a task title | Displays HTML tags as plain text | Passed |
| Program 2: Click a tab and open an accordion item | Activates the selected tab and opens the accordion | Passed |
| Program 2: Type `one two three` in the note box | Displays 13 characters and 3 words | Passed |

**Output:** (Insert screenshots of the main testing results)

## 9. Limitations and Future Scope

### Limitations

- Tasks are stored in a JavaScript array, so they are lost when the webpage is refreshed.
- jQuery is loaded through a CDN, so an internet connection is required.
- Most jQuery features can also be implemented using modern JavaScript.
- The application does not currently have permanent database storage.

### Future Scope

- Use `localStorage` to save tasks even after refreshing the webpage.
- Add features such as editing tasks, setting due dates and drag-and-drop ordering.
- Use `$.ajax()` to load and save tasks from a server.
- Add keyboard accessibility and ARIA attributes to improve usability.
- Integrate a database to store and manage tasks permanently.

## 10. Conclusion

This experiment demonstrated how jQuery simplifies client-side scripting by providing shorter and easier methods for working with HTML elements.

In Program 1, different jQuery selectors, effects, animations, DOM manipulation methods, events, traversal methods and method chaining were implemented. Program 2 combined these concepts to develop an interactive Task Manager application with form validation, event delegation, filtering, searching, an accordion, tabs and a progress bar.

Through this experiment, I learned how jQuery can make webpages more interactive and reduce the amount of code required for common operations. It also improved my understanding of DOM manipulation and event handling, which are important concepts in JavaScript and modern frontend development.