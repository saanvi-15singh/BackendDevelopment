# Experiment 5: Programs to Demonstrate JavaScript Array, Object and Functions

## 1. Aim

To write JavaScript programs that demonstrate arrays, objects and functions.

## 2. Software Requirements

| Item | Details |
|---|---|
| Editor | Visual Studio Code |
| Browser | Google Chrome / Microsoft Edge (Console through `F12`) |
| Languages | HTML5, CSS3, JavaScript (ES6) |
| Extension (Optional) | Live Server |

## 3. Theory

### 3.1 Array

An **array** stores multiple values in one variable, in a specific order. Each value has an index starting from 0.

**Example:**

```javascript
var fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
```

**Common Array Methods:**

| Method | Purpose |
|---|---|
| `push()` / `pop()` | Add / remove an element at the end |
| `unshift()` / `shift()` | Add / remove an element at the start |
| `splice(i, n, ...items)` | Insert or remove elements at any position |
| `slice(start, end)` | Copy a part of the array |
| `concat()` | Join arrays |
| `indexOf()` / `includes()` | Search for a value |
| `sort()` / `reverse()` | Sort or reverse the array |
| `join()` | Convert an array into a string |
| `forEach()` | Run a function for each element |
| `map()` | Create a new array by changing each element |
| `filter()` | Create a new array containing elements that pass a test |
| `reduce()` | Combine all elements into one value |
| `find()`, `some()`, `every()` | Search and test array elements |

### 3.2 Object

An **object** stores data in the form of **key-value pairs**, also called properties. It can also contain functions, which are known as methods.

**Example:**

```javascript
var student = {
    name: "Rahul",
    roll: 101,
    show: function () {
        return this.name;
    }
};

console.log(student.name);    // Dot notation
console.log(student["roll"]); // Bracket notation
```

**Common Object Concepts:**

| Concept | Purpose |
|---|---|
| Dot / bracket notation | Access object properties |
| `delete obj.key` | Remove a property |
| `this` | Refers to the current object inside a method |
| `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()` | Loop through an object |
| Nested objects and arrays of objects | Store complex data |
| Constructor function / `class` | Create multiple similar objects |
| `JSON.stringify()` / `JSON.parse()` | Convert between an object and JSON text |

### 3.3 Function

A **function** is a block of code that runs when it is called. Functions make code reusable and easier to manage.

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

// Function expression
var sub = function (a, b) {
    return a - b;
};

// Arrow function
var mul = (a, b) => a * b;
```

**Common Function Concepts:**

| Concept | Purpose |
|---|---|
| Parameters and `return` | Send values into a function and get a value back |
| Default parameters | Provide default values, such as `function f(a = 10)` |
| Rest parameter | `function f(...nums)` accepts any number of arguments |
| Callback | A function passed as an argument to another function |
| Recursion | A function that calls itself, with a base case |
| Closure | An inner function that remembers variables from its outer function |
| IIFE | A function that runs immediately after it is defined |
| Hoisting | Function declarations can be called before they are written |

## 4. Programs in the Experiment

### Part 1: Arrays

| No. | Program | Concepts Covered |
|---|---|---|
| 1.1 | Creating and accessing arrays | Array literal, `new Array`, index, `length`, `Array.isArray` |
| 1.2 | Adding and removing elements | `push`, `pop`, `shift`, `unshift`, `splice`, `concat` |
| 1.3 | Searching, slicing and sorting | `indexOf`, `includes`, `slice`, `join`, `reverse`, `sort` (text and numeric) |
| 1.4 | Looping and higher-order methods | `for`, `for...of`, `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every` |
| 1.5 | Two-dimensional array | Matrix, diagonal sum, transpose |
| 1.6 | Interactive program | Add numbers from an input box and display sum, average, largest, smallest and sorted array |

### Part 2: Objects

| No. | Program | Concepts Covered |
|---|---|---|
| 2.1 | Creating and accessing objects | Dot and bracket notation, `in`, `hasOwnProperty` |
| 2.2 | Adding, updating and deleting properties | `delete`, `Object.assign`, spread, `Object.freeze` |
| 2.3 | Methods and `this` | `person.fullName()`, rectangle area and perimeter |
| 2.4 | Looping through objects | `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`, destructuring |
| 2.5 | Nested objects and arrays of objects | `JSON.stringify`, `JSON.parse`, filter and reduce on objects |
| 2.6 | Constructor and class | Constructor function, prototype, `class`, `extends`, `super`, `instanceof` |
| 2.7 | Interactive program | Create student objects using a form and store them in an array |

### Part 3: Functions

| No. | Program | Concepts Covered |
|---|---|---|
| 3.1 | Function declaration | Parameters, return, hoisting, function returning an object |
| 3.2 | Function expression and arrow function | Different arrow function forms |
| 3.3 | Default and rest parameters | Default values, `...rest`, `arguments`, spread |
| 3.4 | Callback function | Passing functions and `setTimeout` (asynchronous) |
| 3.5 | Recursion | Factorial, Fibonacci, sum of n numbers |
| 3.6 | Closure | Counter, multiplier, bank account with a private balance |
| 3.7 | IIFE | Normal and arrow IIFE |
| 3.8 | Interactive program | Calculator using an object of functions |

### Part 4: Combined Program

**Student Result:** This program uses an **array of objects** containing 5 students with marks in 3 subjects.

It uses functions such as `total`, `percentage`, `grade` and `status` to calculate each student's total marks, percentage, grade and pass/fail status.

The program also:

- Finds the topper using `reduce()`.
- Counts the number of passed students using `filter()`.
- Sorts students according to their total marks.
- Displays the final results in an HTML table.

## 5. Procedure

1. Create a folder named `experiment5` in Visual Studio Code.
2. Create three files: `index.html`, `style.css` and `script.js`.
3. In `index.html`, create separate sections for arrays, objects and functions. Add a `<pre id="...">` output box for each program.
4. Link `style.css` inside the `<head>` section and link `script.js` before the closing `</body>` tag.
5. In `script.js`, create a helper function named `show(id, lines)` that displays the output on the webpage and in the browser console.
6. Write the array programs, followed by the object programs, function programs and the combined program.
7. Add input boxes and buttons for interactive programs using functions such as `onclick="addNumber()"`.
8. Save all files and open `index.html` using Live Server.
9. Check the output boxes, test every button and press `F12` to view the same output in the **Console** tab.
10. Take screenshots of the webpage and browser console.

## 6. Structure of the Code

```text
experiment5/
│
├── index.html    # Sections, output boxes, input boxes and buttons
├── style.css     # Page styling and console-style output boxes
└── script.js     # All JavaScript programs
```

### Key Code Snippets

**1. Array Methods**

```javascript
var marks = [45, 82, 67, 90, 33, 74];

var passed = marks.filter(function (x) {
    return x >= 40;
});

var total = marks.reduce(function (sum, x) {
    return sum + x;
}, 0);
```

**2. Object with a Method**

```javascript
var person = {
    firstName: "Priya",
    lastName: "Sharma",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
```

**3. Closure**

```javascript
function makeCounter() {
    var count = 0;

    return function () {
        count++;
        return count;
    };
}

var c1 = makeCounter();

c1(); // 1
c1(); // 2
```

**4. Recursion**

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

**5. Array of Objects with Functions**

```javascript
var final = results.map(function (s) {
    var p = percentage(s);

    return {
        name: s.name,
        total: total(s),
        grade: grade(p),
        status: status(s)
    };
});
```

## 7. Output

Take screenshots of the webpage and browser console and insert them below.

**Screenshots:**

```text
![Arrays output](arrays.png)

![Objects output](objects.png)

![Functions output](functions.png)

![Console output](console.png)
```

### Sample Output

| Program | Output |
|---|---|
| `fruits[0]` | `Apple` |
| `a.push(40)` on `[10,20,30]` | `[10,20,30,40]` |
| `marks.filter(x => x >= 40)` | `[45,82,67,90,74]` |
| `marks.reduce(...)` (total) | `391` |
| `person.fullName()` | `Priya Sharma` |
| `Object.keys(car)` | `["brand","model","year","color"]` |
| `factorial(5)` | `120` |
| Fibonacci (first 10) | `0, 1, 1, 2, 3, 5, 8, 13, 21, 34` |
| `triple(7)` (closure) | `21` |
| Combined program | Topper: Priya (275/300), 4 students passed, 1 failed |

## 8. Observations

1. Arrays store ordered data. Methods such as `map()`, `filter()` and `reduce()` process array elements without requiring manually written loops.
2. The `sort()` method sorts numbers as text by default. For numeric sorting, a comparison function such as `(a, b) => a - b` is required.
3. `slice()` does not change the original array, whereas `splice()`, `push()`, `pop()` and `sort()` modify it.
4. Objects store related data and behaviour together. The `this` keyword refers to the object that calls the method.
5. An arrow function does not have its own `this`, so it is not suitable as an object method when access to the object's own `this` is required.
6. A closure keeps variables accessible even after the outer function has finished executing. This can be used to maintain private data, such as a bank account balance.
7. Recursion requires a base case; otherwise, the function may continue calling itself indefinitely.
8. `setTimeout()` runs its callback after a delay. The webpage does not wait for the callback, and its output appears after 2 seconds.

## 9. Result

JavaScript programs demonstrating arrays, objects and functions were written and executed successfully. The output was displayed correctly on the webpage and in the browser console.

## 10. Conclusion

Arrays store lists of values, objects store related data as properties and methods, and functions make code reusable. Together, an array of objects processed by functions, as demonstrated in the Student Result program, forms the foundation of many real-world JavaScript applications.