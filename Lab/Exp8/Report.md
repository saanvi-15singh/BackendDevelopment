# DOM and Event Handling
## Programs to Demonstrate the Document Object Model (DOM) and Event Handling in JavaScript

**Lab Experiment 8 Report**


## 1. Introduction and Objective

The Document Object Model (DOM) is the tree of objects that the browser builds from an HTML page. JavaScript can read and change this tree to update what the user sees. Events such as clicks, key presses, and form submissions allow the page to respond to user interactions.

This experiment demonstrates DOM manipulation and event handling through six small programs on a single web page.

**Objectives:**

- Select elements and change their text, HTML, style, classes, and attributes.
- Create, insert, and remove elements dynamically.
- Navigate through the DOM tree using parents, children, and siblings.
- Handle mouse, keyboard, and form events.
- Understand the event object, `preventDefault()`, bubbling, capturing, `stopPropagation()`, and event delegation.

## 2. Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Elements that the scripts select and change |
| Styling | CSS3 | Layout, highlight classes, light and dark themes |
| Logic | JavaScript (ES6) | DOM manipulation and event listeners |
| Tools | VS Code, Chrome / Edge DevTools | Writing and inspecting the page |

## 3. How to Run

1. Keep `index.html` inside a folder named `exp8-dom-events`.
2. Open the file in Chrome or Edge by double-clicking it or using the Live Server extension in VS Code.
3. Each program displays its output in a green log box below it.
4. No additional installation or server is required.

## 4. Project Structure

```text
exp8-dom-events/
├── index.html    # HTML, CSS and JavaScript in one file (six programs)
└── REPORT.md     # This report
```

## 5. Programs

### 5.1 Program 1: Selecting and Changing Elements

**Aim:** To select HTML elements and change their content, style, classes, and attributes using JavaScript.

| Method / Property | Description |
|---|---|
| `getElementById("id")` | Returns the element with the specified ID |
| `querySelector()` / `querySelectorAll()` | Select elements using CSS selectors (first match / all matches) |
| `textContent` | Reads or sets plain text |
| `innerHTML` | Reads or sets HTML inside an element |
| `style.color = "..."` | Changes inline CSS styling |
| `classList.toggle("highlight")` | Adds or removes a CSS class |
| `setAttribute()` / `getAttribute()` / `dataset` | Work with HTML attributes and `data-*` values |

**Key Code Snippet:**

```javascript
document.getElementById("p1-text").addEventListener("click", () => {
    title.textContent = "Text changed with textContent";
});
```

**Expected Result:**

Each button changes the heading or first paragraph. The log displays the statement that was executed. The Reset button restores the original state.

**Output:**  
*(Insert screenshot of Program 1 here.)*

### 5.2 Program 2: Creating and Removing Elements

**Aim:** To create and modify webpage content dynamically using JavaScript.

| Method | Description |
|---|---|
| `document.createElement("li")` | Creates a new element in memory |
| `appendChild()` / `append()` | Adds an element at the end of a parent |
| `insertBefore(new, reference)` | Inserts an element before another element |
| `element.remove()` | Removes an element from the page |
| `replaceChildren()` | Removes all child elements at once |

**Key Code Snippet:**

```javascript
const li = document.createElement("li");
span.textContent = text;
li.append(span, removeButton);
list.appendChild(li);
```

**Expected Result:**

Typing a name and clicking **Add to End** or **Add to Top** adds an item with its own Remove button. The Clear All button empties the list. An empty name is rejected with a message in the log.

**Output:**  
*(Insert screenshot of Program 2 here.)*

### 5.3 Program 3: Traversing the DOM

**Aim:** To navigate from one HTML element to its related elements in the DOM tree.

| Property | Returns |
|---|---|
| `parentElement` | The parent element |
| `children` | The child elements |
| `previousElementSibling` / `nextElementSibling` | The previous and next sibling elements |
| `firstElementChild` / `lastElementChild` | The first and last child elements |

**Expected Result:**

Clicking an item, such as Cherry, highlights it and displays information about its parent, previous sibling, next sibling, and index.

For example:

- Parent: `ul id='p3-list'`
- Previous element: Banana
- Next element: Mango
- Index: 2 of 5

Clicking the first or last item displays `none` for the missing neighbouring element. The First Child and Last Child buttons perform the same operations through JavaScript.

**Output:**  
*(Insert screenshot of Program 3 here.)*

### 5.4 Program 4: Mouse and Keyboard Events

**Aim:** To handle mouse and keyboard activities using JavaScript event listeners and the event object.

| Event | Description |
|---|---|
| `mouseenter` / `mouseleave` | Fires when the pointer enters or leaves an element |
| `click` / `dblclick` | Fires when an element is clicked once or twice |
| `mousemove` | Fires when the pointer moves |
| `keydown` / `keyup` | Fires when a key is pressed or released |

The `mousemove` event logging is limited to one line every 0.4 seconds.

**Useful Event Properties:**

- `e.offsetX` and `e.offsetY`: Position of the pointer inside the element.
- `e.key`: Character or key pressed.
- `e.code`: Physical key identifier.
- `e.shiftKey`: Checks whether Shift is pressed.
- `e.ctrlKey`: Checks whether Ctrl is pressed.

**Expected Result:**

The box changes colour when the mouse pointer enters it and turns yellow briefly on double-click. Typing `A` with Shift displays the following information:

```text
keydown key='A' code=KeyA +Shift
```

**Output:**  
*(Insert screenshot of Program 4 here.)*

### 5.5 Program 5: Form Events

**Aim:** To handle form-related events such as focus, typing, selection changes, and form submission.

| Event | Description |
|---|---|
| `focus` / `blur` | Fires when a field gains or loses focus |
| `input` | Fires whenever the input value changes |
| `change` | Fires when a select box or checkbox changes |
| `submit` | Fires when the form is submitted |
| `reset` | Fires when the form is reset |

**Key Code Snippet:**

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    console.log(data.get("name"));
});
```

**Expected Result:**

The log displays focus, blur, input, and change events. When the form is submitted, the page does not reload. Instead, the entered name, email, city, and newsletter choice are displayed in the log.

**Output:**  
*(Insert screenshot of Program 5 here.)*

### 5.6 Program 6: Bubbling, Capturing, and Event Delegation

**Aim:** To understand how events travel through nested HTML elements and how one event listener can handle multiple child elements.

| Concept | Meaning |
|---|---|
| Bubbling | The event starts at the clicked element and moves upwards through its parent elements |
| Capturing | The event travels from the outermost parent towards the target element |
| `stopPropagation()` | Stops the event from propagating to other elements |
| `preventDefault()` | Cancels the browser's default action |
| Event Delegation | Uses one listener on a parent element to handle events from its children, including dynamically added elements |

**Expected Results:**

| Setting | Result when clicking the green box |
|---|---|
| Default (Bubbling) | `inner` (target phase), then `middle`, then `outer` (bubble phase) |
| Capture phase enabled | `outer` (capture phase), then `middle`, then `inner` |
| `stopPropagation()` enabled | Only `inner` runs, followed by a message indicating that propagation stopped |

For event delegation, clicking any list item marks it as done. Newly added items also work immediately without requiring a separate event listener.

Clicking the link displays a message that its default action was prevented, and the browser does not open the linked page.

**Output:**  
*(Insert screenshots showing the three event propagation settings.)*

## 6. Event Handling Summary

JavaScript provides different ways to attach event handlers to HTML elements.

| Method | Example | Description |
|---|---|---|
| Inline Attribute | `<button onclick="go()">` | Mixes HTML and JavaScript; generally avoided in larger applications |
| DOM Property | `btn.onclick = go;` | Assigns one handler per event property |
| `addEventListener()` | `btn.addEventListener("click", go);` | Supports multiple handlers, capturing, and event removal |

The `addEventListener()` method is used in this experiment because it provides better control over event handling.

## 7. Problems Faced and Solutions

| Problem | Cause | Solution |
|---|---|---|
| Button did nothing | Script ran before the element existed or the ID was incorrect | Place the script at the end of `<body>` and check the element ID |
| `Cannot read properties of null` | `getElementById()` returned `null` | Check that the HTML ID matches the ID used in JavaScript |
| Form submission reloaded the page | Default form submission behaviour | Use `e.preventDefault()` inside the submit handler |
| Clicking a new list item did nothing | Listener was added only to elements present when the page loaded | Use event delegation on the parent list |
| Clicking a button inside a list item also triggered the item's handler | Event bubbling triggered the parent handler | Handle the event on the button or use `stopPropagation()` |
| Capture checkbox did not change the event order | Listener was added only once with the previous setting | Remove and re-add listeners when the checkbox changes |
| `mousemove` flooded the log | The event fires many times per second | Limit logging using a time check |

*Note: Keep only the problems that were actually faced during the experiment.*

## 8. Testing

The following test cases can be used to verify the working of all six programs.

| Test | Expected Result |
|---|---|
| Program 1: Click each button | Heading or paragraph changes, and the log displays the executed statement. Reset restores the original state |
| Program 2: Add three items and remove the middle one | The list displays the two remaining items, and the log shows the count |
| Program 2: Click Add with an empty field | "Type an item name first" is logged, and no item is added |
| Program 3: Click Banana | Previous: Apple, Next: Cherry, Index: 1 of 5 |
| Program 3: Click the last item | Next is displayed as `none` |
| Program 4: Hover, click, and double-click the box | Log displays `mouseenter`, `click` with x and y coordinates, and `dblclick` |
| Program 4: Type `a` in the field | `keydown` and `keyup` events are displayed |
| Program 5: Type in the Name field | Character counter updates and each `input` event is logged |
| Program 5: Fill the form and click Submit | Page does not reload, and entered values are logged |
| Program 6: Click the green box (default) | Event order: inner, middle, outer |
| Program 6: Enable capture and click the green box | Event order: outer, middle, inner |
| Program 6: Enable `stopPropagation()` and click the green box | Only the inner event handler runs |
| Program 6: Add an item and click it | The new item toggles its done status |
| Program 6: Click the link | The page does not open, and a log message appears |

**Output:**  
*(Insert screenshots of the main test cases here.)*

## 9. Limitations and Future Scope

### Current Limitations

- The programs are demonstrations, so the data is not saved and is lost when the page is refreshed.
- The `innerHTML` example uses a fixed string. Using `innerHTML` with user input can be unsafe.
- Only mouse and keyboard events are covered. Touch, drag-and-drop, and scroll events are not included.

### Possible Improvements

- Save items using `localStorage`.
- Add drag-and-drop, touch events, and `IntersectionObserver` for scroll effects.
- Develop a complete small application, such as a to-do list or quiz, using these concepts.
- Add keyboard support and ARIA attributes so that every action can be performed without a mouse.

## 10. Conclusion

This experiment demonstrated how JavaScript uses the Document Object Model (DOM) to read and modify webpage elements and how events make a webpage interactive.

The experiment covered selecting, changing, creating, removing, and traversing DOM elements. It also demonstrated mouse, keyboard, and form events, along with the event object, `preventDefault()`, bubbling, capturing, `stopPropagation()`, and event delegation.

These concepts form the foundation of interactive websites and are important for understanding modern front-end development, libraries, and frameworks.